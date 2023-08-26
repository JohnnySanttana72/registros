
import { ConfiguracoesPage } from './configuracoes.page';




import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';



describe('TConfiguracoesPage', () => {
  let component: ConfiguracoesPage;
  let fixture: ComponentFixture<ConfiguracoesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ConfiguracoesPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ConfiguracoesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

