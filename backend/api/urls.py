from django.urls import path
from . import views

urlpatterns = [
    path('dashboard/', views.TaskListCreateAPIView.as_view(), name='task-list'),
    path('dashboard/create/', views.TaskListCreateAPIView.as_view(), name='task-create'),
    path('dashboard/<int:pk>/', views.TaskDetailAPIView.as_view(), name='task-detail'),
    path('dashboard/<int:pk>/update/', views.TaskUpdateAPIView.as_view(), name='task-update'),
    path('dashboard/<int:pk>/delete/', views.TaskDeleteAPIView.as_view(), name='task-delete'),

]
