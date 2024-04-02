# Use include() to add paths from the appVehicular
from .views import *
from django.conf.urls.static import static
from django.conf import settings
from django.urls import path, include
from django.conf.urls import handler404, re_path

from rest_framework_simplejwt import views as jwt_views
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r"todos", TodoViewSet , basename="todos")
urlpatterns = [
    re_path(r"user/create/$", CreateUser.as_view()),
    # re_path(r'token/obtain/$', jwt_views.TokenObtainPairView.as_view(), name='token_create'),  # override sjwt stock token
    re_path(r"token/refresh/$", jwt_views.TokenRefreshView.as_view(), name="token_refresh"),
    re_path(r"login/$", CustomTokenObtainPairView.as_view(), name="token_obtain_pair"),
    path('', include('rest_social_auth.urls_jwt_pair')),
    re_path(r"", include(router.urls)),
    

] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
