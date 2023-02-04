import { Component, OnInit } from '@angular/core';
import { Categories } from '../../interface/categorias';
import dados from '../../../../../assets/db.json';
import { StateService } from '@uirouter/angular';
import { GalleryService } from '../../services/gallery.service';
import { GaleriaImgService } from 'src/app/modules/galeria/services/galeria-img.service';

@Component({
  selector: 'app-resumo',
  templateUrl: './resumo.component.html',
  styleUrls: ['./resumo.component.scss']
})
export class ResumoComponent implements OnInit {

  recentes: string[] = []
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
  
  constructor(
    private stateService: StateService,
    private serviceGaleria: GaleriaImgService,
  ){}

  ngOnInit(): void { 
    this.filterRecentDates(dados);
  }

  filterRecentDates(dates: any[]) {
    dates.sort((a, b) => new Date(b.data).getTime() - new Date(a.data).getTime());
    console.log(dates.slice(0, 4));
    return dates.slice(0, 4);
  }

  str = '2024-09-21';
  date = new Date(this.str).getTime();
  categories: Categories[] = [Categories.Animação, Categories.Animes, Categories.Cosplay, Categories.Ecchi, Categories.Games, Categories.Hentai, Categories.Pixel, Categories.Retro];

  gocategorie(categoria: any){
    this.serviceGaleria.setCategoria(categoria);
    this.serviceGaleria.setUltimaPage('categoria');
    this.stateService.go('galeria-img', {}, { location: false });
  }

  goToGalery(device: string){
    this.serviceGaleria.setDevice(device);
    this.serviceGaleria.setUltimaPage('device');
    this.stateService.go('galeria-img', {}, { location: false });
  }

}
