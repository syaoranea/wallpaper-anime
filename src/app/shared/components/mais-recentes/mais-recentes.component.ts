import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mais-recentes',
  templateUrl: './mais-recentes.component.html',
  styleUrls: ['./mais-recentes.component.scss']
})
export class MaisRecentesComponent implements OnInit {

  imagens = [
    {
      url:
        'https://p4.wallpaperbetter.com/wallpaper/753/706/507/digital-digital-art-anime-anime-girls-looking-at-viewer-hd-wallpaper-preview.jpg',
      nome: 'nature1',
    },
    {
      url:
        'https://1.bp.blogspot.com/-nqnYZ7bSio8/YBwTnYFIJ7I/AAAAAAAAPic/qXAwwSonGAgreefUz_oH_8IZBaz27idWwCLcBGAsYHQ/s0/anime.png',
      nome: 'nature2',
    },
    {
      url:
        'https://c4.wallpaperflare.com/wallpaper/944/53/270/anime-anime-girls-digital-digital-art-2d-hd-wallpaper-preview.jpg',
      nome: 'person1',
    },
    {
      url:
        'https://c4.wallpaperflare.com/wallpaper/213/821/300/anime-girls-anime-digital-digital-art-artwork-hd-wallpaper-preview.jpg',
      nome: 'person2',
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
