from django.shortcuts import render

# Create your views here.
def index(request):
    usuario= "Pepe"
    argentino=False
    return render(request, 'app1/index.html', {"dato1": usuario, "dato2" : argentino})

def index2(request):
    usuario= "Pepe"
    argentino=False
    return render(request, 'app1/indexPrueba.html')
