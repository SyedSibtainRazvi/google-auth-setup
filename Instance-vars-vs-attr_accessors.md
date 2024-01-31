**Use instance variables if we don't have to expose data**

Background:

We had a discussion in Codemancers room to discuss the best practice when it comes to instance variables and attr_* methods.

Yuva : 

In favor of attr_accessor:

> - i don't want to assign variables myself. https://github.com/rails/rails/blob/master/activemodel/lib/active_model/model.rb#L79 does it for me when i include ActiveModel::Model. this really works well if we are passing bunch of params from controller.
- i prefer self.email = , over @email in case i have to assign some variables.
- thinking about accessibilty, having a mix of attr_accessors, and attr_readers on object is confusing for me. so i make everything attr_accessors

Emil : 

Against attr_accessor:

> - Bad data encapsulation - private data is like private methods and aren't known to the outside world
- Makes liskov's substitution principle hard because when you subclass a class, the attr_accessors need also need to be implemented in the subclass
- Leads to feature envy code smell because once data is exposed, other classes can hold logic of using the data from other classes

Kashyap:

> I use @vars for setting that var, and define a attr_reader for that var. But since yesterday, (been reading that Ruby patterns book) it hit me that attr_reader is not a good idea if that var is not intended to be used outside of that class. So I'm leaning toward using an instance variable inside the class but use a method version IF an attr_reader is defined or is required to be defined.

Mrinmoy:

> in case we need to expose it to the outside world, I user attr_accessor, else instance variables.