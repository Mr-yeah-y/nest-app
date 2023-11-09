import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { coffee } from './entities/coffee.entity';

//service中一般写的都是crud的操作
@Injectable()
export class CoffeesService {
  private coffees: coffee[] = [
    {
      id: 1,
      name: 'yyg',
      brand: 'YYYghg',
      flavors: ['323232', '3232'],
    },
    {
      id: 2,
      name: 'yyg',
      brand: 'YYYghg',
      flavors: ['323232', '3232'],
    },
  ];

  findAll() {
    return this.coffees;
  }

  findOne(id: string) {
    const coffee = this.coffees.find((item) => item.id === +id);

    if (!coffee) {
      throw new HttpException(`coffee #${id} not found`, HttpStatus.NOT_FOUND);
    }
    return coffee;
  }

  create(createCoffeeDto: any) {
    this.coffees.push(createCoffeeDto);
  }

  update(id: string, updateCoffeeDto: any) {
    const existingCoffee = this.findOne(id);

    if (existingCoffee) {
      // todo
    }
  }

  remove(id: string) {
    const index = this.coffees.findIndex((item) => item.id === +id);

    if (index >= 0) {
      this.coffees.splice(index, 1);
    }
  }
}
