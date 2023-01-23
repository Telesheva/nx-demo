import { Component, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'core-page-layout',
  templateUrl: './page-layout.component.html',
  styleUrls: ['./page-layout.component.scss'],
})
export class CorePageLayoutComponent {
  @Input() pageMainActionTemplate: TemplateRef<unknown> | null;
  @Input() pageHeading: string | null;
  @Input() pageActionsTemplate: TemplateRef<unknown> | null;
  @Input() pageContentTemplate: TemplateRef<unknown> | null;
}
