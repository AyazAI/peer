from rest_framework import viewsets, permissions  # added permissions

from .serializers import UserSerializer
# from todos.models import Todo  # remove


class UserViewSet(viewsets.ModelViewSet):
    # queryset = Todo.objects.all()  # remove
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]  # added

    def get_queryset(self):  # added
        return self.request.user.objects.all()

    def perform_create(self, serializer):  # added
        serializer.save(owner=self.request.user)