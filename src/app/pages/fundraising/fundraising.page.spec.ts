import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FundraisingPage } from './fundraising.page';

describe('BlogDetailsPage', () => {
    let component: FundraisingPage;
    let fixture: ComponentFixture<FundraisingPage>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [FundraisingPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();

        fixture = TestBed.createComponent(FundraisingPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});