from django.forms import ModelForm
from django import forms
from .models import Note

class NoteForm(forms.ModelForm):
    class Meta:
        model = Note
        fields = ['title', 'description']
    
    def __init__(self, *args, **kwargs):
        super(NoteForm, self).__init__(*args, **kwargs)

        self.fields['title'].widget.attrs.update(
            {'class': 'form-control', 'placeholder': 'Title', 'id':'note-form'},
        )
        
        self.fields['description'].widget.attrs.update(
            {'class': 'form-control', 'placeholder': 'Description', 'id':'note-form'},
        )
        