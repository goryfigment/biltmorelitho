from django.conf.urls import url
from django.contrib import admin
from biltmorelitho.controllers import site

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^$', site.main, name='site')
]
