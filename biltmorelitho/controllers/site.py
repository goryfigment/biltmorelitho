from django.shortcuts import render
from biltmorelitho.modules.base import get_base_url


def main(request):
    data = {
        'base_url': get_base_url()
    }

    return render(request, 'home2.html', data)
