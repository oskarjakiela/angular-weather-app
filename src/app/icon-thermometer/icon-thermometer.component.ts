import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';

@Component({
  selector: 'app-icon-thermometer',
  templateUrl: './icon-thermometer.component.html',
  styleUrls: ['./icon-thermometer.component.css']
})
export class IconThermometerComponent {
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
        'thermometer',
        sanitizer.bypassSecurityTrustResourceUrl('assets/icons/thermometer.svg'));
  }
}
