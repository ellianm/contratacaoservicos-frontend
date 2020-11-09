import { Component, OnInit, Input } from '@angular/core';
import { IUserFile } from 'src/app/core/interfaces/iUserFile';
import { ProfileService } from '../profile.service';
import { MessageServiceResolver } from 'src/app/core/utils-message/message-service.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.css']
})
export class AvatarComponent implements OnInit {

  @Input() userName: string;
  @Input() photoUrl: string;
  @Input() userId: string;
  url;

  constructor(private profileService: ProfileService,
    private messageService: MessageServiceResolver,
    private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.url = this.photoUrl ? this.photoUrl : 'assets/avatar.png';
  }

  getSantizeUrl(url: string) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

  uploadPhoto(file: File) {
    this.url = URL.createObjectURL(file);
    const dados: IUserFile = {
      id: this.userId,
      avatar: file
    };
    this.profileService.savePhoto(dados).subscribe(
      () => this.messageService.success('Imagem de perfil atualizada com sucesso'),
      () => this.messageService.error('Não foi possível alterar a imagem de perfil, tente novamente')
    );
  }

}
