from django.urls import path
from rest_framework import permissions  
from drf_yasg.views import get_schema_view
from drf_yasg import openapi
from .views import * 

get_schema_view = get_schema_view(
    openapi.Info(
        title="CPU Metrics API",
        default_version="v1",
        description="CPU Metrics API",
        terms_of_service="https://www.google.com/policies/terms/",
        contact=openapi.Contact(email="aditya.pai@somaiya.com"),
        license=openapi.License(name="BSD License"),
    ),
    public=True,
    permission_classes=(permissions.AllowAny,),
)

urlpatterns = [
    # swagger and redoc
    path("", get_schema_view.with_ui("swagger", cache_timeout=0), name="schema-swagger-ui"),
    path("docs/", get_schema_view.with_ui("redoc", cache_timeout=0), name="schema-redoc"),

    # api
    path('hello-world/', hello_world, name='hello_world'),
    path('cpu-metrics/', cpu_metrics, name='cpu_metrics'),
    path('create-cpu-temperature-transaction/', create_cpu_temperature_transaction, name='create_cpu_temperature_transaction'),
]