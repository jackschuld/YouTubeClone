from django.shortcuts import render, get_object_or_404
from rest_framework import status
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from .models import Comment
from .serializers import CommentSerializer

# Create your views here.


@api_view(['GET'])
@permission_classes([AllowAny])
def get_video_comments(request, video_id):
    if request.method == 'GET':
        comments = Comment.objects.filter(video_id=video_id)
        serializer = CommentSerializer(comments, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def create_comment(request, video_id):
    serializer = CommentSerializer(data=request.data)
    serializer.is_valid(raise_exception=True)
    serializer.save(user=request.user, video_id=video_id)
    return Response(serializer.data, status=status.HTTP_201_CREATED)
    
@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def update_comment(request, video_id, comment_id):
    comment = get_object_or_404(Comment, pk=comment_id)
        # comments = Comment.objects.filter(user_id=request.user.id)
    serializer = CommentSerializer(comment, data=request.data, partial=True)
    serializer.is_valid(raise_exception=True)
    serializer.save()
    return Response(serializer.data, status=status.HTTP_200_OK)