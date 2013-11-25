conformjs
=========

[![Build Status](https://travis-ci.org/dwmkerr/conformjs.png?branch=master)](https://travis-ci.org/dwmkerr/conformjs)

ConformJS is a super-light JavaScript library that lets you create a POJO (Plain
old JavaScript Object) from any other JavaScript object. It's a great way of cleaning
up the input to APIs, services and functions.

We take the input object and a spec, and create a new object that conforms to the spec
and has the appropriate data from the input object.

````js
var blogPostSpec =  {
	title: { type: "String", required: true},
	message: { type: "String" },
	timestamp: {type: "Date", required: true}
};

var blogPost = conform(anyObject).to(BlogPostSpec);
````

ConformJS is useful if you are working with objects from an external source. For example
in a REST service data that comes from a post shouldn't be entered into a database - a copy
of the data should be made that contains only the required properties. These checks can
be time consuming and error prone to do by hand, so ConformJS can do them for you.

Features
--------

 * Conformation: Make a copy of any object that conforms to a given specification.
 * Deep Cloning: Deep clones are made of objects.
 * Rigour: ConformJS can ingore extra or missing properties, or throw exceptions if 
   matches are not made.
 * Checking: A check can be made against an onject with conform(object).check(spec)
   to see whether there are supurflouous or missing fields.

Examples
--------


