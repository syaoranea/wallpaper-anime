import { Component, OnInit } from '@angular/core';
import { Categories } from '../../interface/categorias';

@Component({
  selector: 'app-resumo',
  templateUrl: './resumo.component.html',
  styleUrls: ['./resumo.component.scss']
})
export class ResumoComponent implements OnInit {

   images = [
    {
      imageSrc:
        'https://p4.wallpaperbetter.com/wallpaper/753/706/507/digital-digital-art-anime-anime-girls-looking-at-viewer-hd-wallpaper-preview.jpg',
      imageAlt: 'nature1',
    },
    {
      imageSrc:
        'https://1.bp.blogspot.com/-nqnYZ7bSio8/YBwTnYFIJ7I/AAAAAAAAPic/qXAwwSonGAgreefUz_oH_8IZBaz27idWwCLcBGAsYHQ/s0/anime.png',
      imageAlt: 'nature2',
    },
    {
      imageSrc:
        'https://c4.wallpaperflare.com/wallpaper/944/53/270/anime-anime-girls-digital-digital-art-2d-hd-wallpaper-preview.jpg',
      imageAlt: 'person1',
    },
    {
      imageSrc:
        'https://c4.wallpaperflare.com/wallpaper/213/821/300/anime-girls-anime-digital-digital-art-artwork-hd-wallpaper-preview.jpg',
      imageAlt: 'person2',
    },
  ]
  
  constructor() { }

  ngOnInit(): void {    
  }

  categories: Categories[] = [Categories.Animação, Categories.Animes, Categories.Cosplay, Categories.Ecchi, Categories.Games, Categories.Hentai, Categories.Pixel, Categories.Retro];

  
}
