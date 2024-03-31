from django.contrib import admin
from django.urls import include, path
from django.conf import settings

from django.conf.urls.static import static
from rest_framework import permissions


from drf_yasg.views import get_schema_view
from drf_yasg import openapi

schema_view = get_schema_view(
    openapi.Info(
        #  add your swagger doc title
        title="Auth API",
        #  version of the swagger doc
        default_version="v1",
        # first line that appears on the top of the doc
        description="Authentication api",
    ),
    public=True,
    permission_classes=(permissions.AllowAny,),
)


urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/", include("api.urls")),
    path(
        "swagger/",
        schema_view.with_ui("swagger", cache_timeout=0),
        name="schema-swagger-ui",
    ),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
