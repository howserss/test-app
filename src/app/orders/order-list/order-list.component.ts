import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgModel, Validators } from '@angular/forms';

import { QuillModules } from 'ngx-quill';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {

 public currentBlurbSize: number;
 public quillModules: QuillModules;

  public model={emailBody:''};
  constructor() { }

  ngOnInit() {
  this.quillModules = this._getQuillModules();
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
        [{ 'font': [] }],
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
