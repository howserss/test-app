import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgModel, Validators } from '@angular/forms';
import * as Quill from 'quill'
import { QuillModules } from 'ngx-quill';

const font = Quill.import('formats/font')
// We do not add Aref Ruqaa since it is the default
font.whitelist = ['calibri', 'serif', 'sansserif', 'monospace']
Quill.register(font, true)

const toolbarOptions = [
  ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
  ['blockquote', 'code-block'],
  [{ 'header': 1 }, { 'header': 2 }],               // custom button values
  [{ 'list': 'ordered' }, { 'list': 'bullet' }],
  [{ 'indent': '-1' }, { 'indent': '+1' }],          // outdent/indent
  [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
  [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
  [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
  [{ 'font': ['Calibri'] }],
  [{ 'align': [] }],
  ['clean']                                         // remove formatting button
];

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit,AfterViewInit {

 public currentBlurbSize: number;
 public quillModules: QuillModules;

 public theme: string = 'snow';
 public placeholder: string="Type here.";
 @ViewChild('quillEditor', { read: ElementRef }) editor: ElementRef;
 quill:any;
  public model={emailBody:''};
  constructor() { }

  ngOnInit() {
  this.quillModules = this._getQuillModules();
  }

  ngAfterViewInit(){
    this.quill = new Quill(this.editor.nativeElement, {
      modules: {
        toolbar: toolbarOptions
      },
      theme: this.theme,
      placeholder: this.placeholder || ''
    });
  }

  private _getTextFromHtml(html) {
    const el = document.createElement('div');
    el.innerHTML = html;
    return el.innerText || el.textContent;
}

private _getQuillModules() {



    return {
      toolbar: [
        ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
        ['blockquote', 'code-block'],
     
        [{ 'header': 1 }, { 'header': 2 }],               // custom button values
        [{ 'list': 'ordered'}, { 'list': 'bullet' }],
        [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
        [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
        [{ 'direction': 'rtl' }],                         // text direction
     
        [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
     
        [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
        [{ 'font':['Calibri']}],
        [{ 'align': [] }],
     
        ['clean'],                                         // remove formatting button
     
        ['link', 'image', 'video']                         // link and image, video
      ]
    };

}

public updateRemainingChars(html) {
  if (!html) {
      this.currentBlurbSize = 0;
  } else {
      const rawText = this._getTextFromHtml(html);
      this.currentBlurbSize = rawText.length;
  }
}

}
