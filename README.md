# Flight Booker

# Description:

Challenge: Constraints.

![how Flight Booker should work](https://github.com/blalina/flight_booker/blob/main/ScreenShots/bookflight.png)

The task is to build a frame containing a combobox C with the two options “one-way flight” and “return flight”, two textfields T1 and T2 representing the start and return date, respectively, and a button B for submitting the selected flight. T2 is enabled iff C’s value is “return flight”. When C has the value “return flight” and T2’s date is strictly before T1’s then B is disabled. When a non-disabled textfield T has an ill-formatted date then T is colored red and B is disabled. When clicking B a message is displayed informing the user of his selection (e.g. “You have booked a one-way flight on 04.04.2014.”). Initially, C has the value “one-way flight” and T1 as well as T2 have the same (arbitrary) date (it is implied that T2 is disabled).

The focus of Flight Booker lies on modelling constraints between widgets on the one hand and modelling constraints within a widget on the other hand. Such constraints are very common in everyday interactions with GUI applications. A good solution for Flight Booker will make the constraints clear, succinct and explicit in the source code and not hidden behind a lot of scaffolding.

Flight Booker is directly inspired by the [Flight Booking Java example in Sodium](http://ww25.blog.reactiveprogramming.org/?p=21&subid1=20220302-0334-4002-8ce3-3fe2212ae109) with the simplification of using textfields for date input instead of specialized date picking widgets as the focus of Flight Booker is not on specialized/custom widgets.