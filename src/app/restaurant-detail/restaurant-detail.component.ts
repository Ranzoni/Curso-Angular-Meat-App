import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Restaurant } from 'app/restaurants/restaurant/restaurant.model';
import { RestaurantsService } from 'app/restaurants/restaurants.service';

@Component({
  selector: 'mt-restaurant-detail',
  templateUrl: './restaurant-detail.component.html'
})
export class RestaurantDetailComponent implements OnInit {

  restaurant: Restaurant;

  constructor(private restaurantsService: RestaurantsService,
    private rout: ActivatedRoute) { }

  ngOnInit() {
    this.restaurantsService.restaurantById(this.rout.snapshot.params['id'])
      .subscribe(restaurant => this.restaurant = restaurant);
  }

}
