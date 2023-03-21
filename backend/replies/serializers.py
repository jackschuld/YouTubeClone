from rest_framework import serializers
from .models import Reply


class ReplySerializer(serializers.ModelSerializer):
    username = serializers.SerializerMethodField()
    def get_username(self, comment):
        return comment.user.username
    class Meta:
        model = Reply
        fields = ['id', 'username', 'comment', 'text']
