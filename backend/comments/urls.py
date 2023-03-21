from django.urls import path, include
from comments import views

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<

urlpatterns = [
    path('', views.get_video_comments),
    path('<int:comment_id>/', views.update_comment),
    path('add_comment/', views.create_comment),
    path('<int:comment_id>/replies/', include('replies.urls')),
]
