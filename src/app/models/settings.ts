import { environment } from '../../environments/environment';

export class Settings {
  ApiEndPoint: string = environment.COSMIC_API + environment.COSMIC_BUCKET + '/';
  ApiReadKey: string = environment.COSMIC_READ_KEY;
  ApiWriteKey: string = environment.COSMIC_WRITE_KEY;
}

export const SpotTypes = ['Ocupado', 'Libre'];
// export const EventTypes = ['Payment', 'Maintenance', 'Cleaning'];
// export const Floors = ['Ground', 'First', 'Second', 'Top'];
