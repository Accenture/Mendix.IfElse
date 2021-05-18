## IfElse
Tiny widget that enhances Conditional Visibility feature adding the **else/otherwise** case

## Typical usage scenario
A very often development situation is that:
- you have some **condition**
- **if** it is **true**, display some content
- **otherwise**, display some other content

In Mendix development a common pattern in this case is to use the [Conditional Visibility feature](https://docs.mendix.com/refguide/common-widget-properties#visibility-properties). However, you have to **duplicate the logic**, repeating your condition **twice**:
- first for the **true case**: `the condition...`
- and then for the **otherwise case**, with additional **negation**: `not(the condition...)`

This can be **cumbersome and error-prone**, especially if your condition is **complicated**. For example you can have two containers with Visibility set to:
- `$currentObject/Name = 'Some name' and ($currentObject/SearchChangedDate > [%BeginOfCurrentDay%] or $currentObject/SomeAssociatedEntity != empty`)
- `not($currentObject/Name = 'Some name' and ($currentObject/SearchChangedDate > [%BeginOfCurrentDay%] or $currentObject/SomeAssociatedEntity != empty)`)

As you can see, it is **not immediately apparent** that the two are **related**. Readability and maintainability is low and it will be **easy to make a mistake** when changing something in future (e.g. extending the condition).

The solution is to use this widget, providing the condition once and two containers for both cases inside.

## Usage
- Put the widget where you need it
- Set the `If` expression to your **condition**
- Fill the `Then` placeholder with content for **true case**
- Fill the `Else` placeholder with content for **otherwise case**

The **content can be anything**, e.g. a simple Text widget or a complex Container with a DataGrid or any other Mendix element.

## Demo project
[ObjectivityCommons](https://objectivitycommons-sandbox.mxapps.io/) > _Test_ button > _IfElse widget_ section
