from rest_framework.response import Response

from rest_framework import generics
from rest_framework.permissions import AllowAny
from rest_framework import status
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework.permissions import AllowAny, IsAuthenticated, IsAdminUser
from rest_framework import status, viewsets

from .models import *
from .serializer import *

from rest_framework.views import exception_handler
from rest_framework.exceptions import AuthenticationFailed
from rest_framework.authentication import TokenAuthentication


class CustomTokenAuthentication(TokenAuthentication):
    def authenticate_credentials(self, key):
        user, token = super().authenticate_credentials(key)
        if not user:
            raise AuthenticationFailed(
                "Custom message: User not found for the provided token."
            )
        return user, token


def custom_exception_handler(exc, context):
    response = exception_handler(exc, context)
    print(response)
    if response.status_code == status.HTTP_400_BAD_REQUEST:
        message = response.data.get("email")[0]
    elif response.status_code == status.HTTP_401_UNAUTHORIZED:
        message = "Authentication credentials were not provided or invalid"
    else:
        message = "Error"
    return Response(
        {
            "status": response.status_code,
            "message": message,
            "data": response.data
        },
        status=response.status_code,
    )


class CreateUser(generics.CreateAPIView):
    permission_classes = (AllowAny,)
    queryset = User.objects.filter(is_superuser=False)
    serializer_class = UserSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        token = RefreshToken.for_user(user)
        print(token)
        return Response(
            {
                "status": status.HTTP_201_CREATED,
                "message": "Successful",
                "data": {
                    "pk": user.pk,
                    "refresh": str(token),
                    "access": str(token.access_token),
                },
            },
            status=status.HTTP_201_CREATED,
        )


class CustomTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer

    def post(self, request, *args, **kwargs):
        response = super().post(request, *args, **kwargs)
        print(response)
        return Response(
            {
                "status": status.HTTP_200_OK,
                "message": "Successful",
                "data": response.data,
            },
            status=status.HTTP_200_OK,
        )


class TodoViewSet(viewsets.ModelViewSet):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer

    def get_permissions(self):
        return [AllowAny()]
        if self.request.method == "GET":
            return [IsAuthenticated()]
        return [IsAuthenticated()]
        # return super().get_permissions()

    def get_queryset(self):
        user_id = self.request.query_params.get('user_id')
        if user_id is not None:
            # Filter todos by user ID
            return Todo.objects.filter(user_id=user_id)
        return super().get_queryset()

    
    def retrieve(self, request, *args, **kwargs):
        response = super().retrieve(request, *args, **kwargs)
        return Response(
            {
                "status": status.HTTP_200_OK,
                "message": "Successful",
                "data": response.data,
            },
            status=status.HTTP_200_OK,
        )

    # GET
    def list(self, request, *args, **kwargs):
        response = super().list(request, *args, **kwargs)
        return Response(
            {
                "status": status.HTTP_200_OK,
                "message": "Successful",
                "data": response.data,
            },
            status=status.HTTP_200_OK,
        )

    # POST
    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(
                {"status": status.HTTP_201_CREATED, "message": "Successful"},
                status=status.HTTP_201_CREATED,
            )
        else:
            default_errors = serializer.errors
            field_names = []
        for field_name, field_errors in default_errors.items():
            field_names.append(field_name)
        return Response(
            {
                "status": status.HTTP_400_BAD_REQUEST,
                "message": f"Invalid data in {field_names}",
            },
            status=status.HTTP_400_BAD_REQUEST,
        )

    # PATCH
    def update(self, request, *args, **kwargs):
        response = super().update(request, *args, **kwargs)
        return Response(
            {
                "status": status.HTTP_200_OK,
                "message": "Successful",
                "data": response.data,
            },
            status=status.HTTP_200_OK,
        )

    # DELETE
    def destroy(self, request, *args, **kwargs):
        response = super().destroy(request, *args, **kwargs)
        return Response(
            {
                "status": status.HTTP_200_OK,
                "message": "Successful",
            },
            status=status.HTTP_200_OK,
        )
