import { StringField } from '../../decorators/field.decorator';

export class NameDto {
  @StringField()
  name: string;
}
