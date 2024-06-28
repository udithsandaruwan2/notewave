from django.shortcuts import render, redirect
from .models import Note
from .forms import NoteForm
from django.contrib import messages

def addNote(request):
    form = NoteForm()
    if request.method == 'POST':
        form = NoteForm(request.POST)
        if form.is_valid():
            form.save()
            messages.success(request, "Note added successfull !")
            return redirect('notes')
    
    context = {'form':form}
    return render(request, 'notes/add-update-note.html',context)

def updateNote(request, pk):
    note = Note.objects.get(id=pk)
    form = NoteForm(instance=note)
    if request.method == 'POST':
        form = NoteForm(request.POST, instance=note)
        if form.is_valid():
            form.save()
            messages.success(request, "Note updated successfull !")
            return redirect('notes')
    
    context = {'form':form}
    return render(request, 'notes/add-update-note.html',context)

def notes(request):
    notes = Note.objects.all()
    
    context = {'notes':notes}
    return render(request, 'notes/notes.html', context)

def deleteNote(request, pk):
    context = {}
    return render(request, 'notes/delete-note.html', context)
