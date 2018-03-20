import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';

@Component({
  selector: 'app-icon-wind',
  templateUrl: './icon-wind.component.html',
  styleUrls: ['./icon-wind.component.css']
})
export class IconWindComponent {
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
        'wind',
        sanitizer.bypassSecurityTrustResourceUrl('assets/icons/wind.svg'));
  }
}
