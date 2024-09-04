export interface AffirmationGallery{
    title:String;
    data:GalleryPreviewData[];
}

export interface GalleryPreviewData{
    id:number;
    text:string;
    image:any;
}