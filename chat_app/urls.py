from django.contrib import admin
from django.urls import path,include

urlpatterns = [
    path('', include('chat.urls')),
    # path('api/', include('chat.api.urls')),
    path('api/auth/', include('accounts.api.urls')),  # added
    path('admin/', admin.site.urls),
]