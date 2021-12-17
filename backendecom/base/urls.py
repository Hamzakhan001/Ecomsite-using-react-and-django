from django.urls import path
from django.urls import URLPattern
from . import views

urlpatterns = [
    path('', views.getRoutes, name='routes'),
    path('products/', views.getprodu, name='products'),
    path('products/<str:pk>', views.getproduct, name='products'),

]
