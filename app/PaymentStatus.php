<?php

namespace App;

enum PaymentStatus: string
{
     case CREATED = 'CREATED';
     case PAID = 'PAID';
     case REFUNDED = 'REFUNDED';
     case CANCELLED = 'CANCELLED';

}
