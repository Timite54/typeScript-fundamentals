class Car implements Véhicule {
    faire: string;
    modèle: string;
    année: number;
  
    constructor(faire: string, modèle: string, année: number) {
      this.faire = faire;
      this.modèle = modèle;
      this.année = année;
    }
  
    démarrer(): void {
      console.log("Le moteur de la voiture a démarré");
    }
  }
  