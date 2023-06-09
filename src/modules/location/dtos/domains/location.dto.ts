import { AutoMap } from '@automapper/classes';

import { AbstractDto } from '../../../../common/dto/abstract.dto';
import { LocationStatusEnum } from '../../enums/location-status.enum';

export class LocationDto extends AbstractDto {
    @AutoMap()
    long: number;

    @AutoMap()
    lat: number;

    @AutoMap()
    name: string;

    @AutoMap()
    description: string;

    @AutoMap()
    distance?: number;

    @AutoMap()
    status?: LocationStatusEnum;

    @AutoMap()
    icon: string;
}
