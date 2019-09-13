---
{
  "title": "Display",
  "title_metadata": false,
  "layout_type": "LayoutArticle",
  "summary": false,
  "breadcrumbs": [
    {
      "text": "Layout/"
    }
  ],
}
---

<cdr-doc-table-of-contents-shell>

Cedar Design System provides many generic, responsively-aware visibility utility classes. All classes defined below are also available as breakpoint-aware classes. 

By appending the appropriate breakpoint name @(xs, sm, md, lg) to your display class, you can create a chain of class names that allow you to customize your display needs to fit each of your screen sizes. For more information, visit the 
[Targeting the Utility Media Query with Class Names](../responsive/?active-link=targeting-the-utility-media-query-with-class-names) section of the Responsive Layout page. 

The display classes usually fall into two categories: showing or hiding content.

## Showing Your Content
Content can be displayed in many ways and quite a few of them are mentioned here. These breakpoint-aware classes are named for the css display property they apply. 

-  **cdr-display-flex**
    -  You would like to apply flex layout to children of the container
    -  You expect your element to behave like a block
-  **cdr-display-inline-flex**
    -  You would like to apply flex layout to children of the container
    -  You expect your element to behave as inline
-  **cdr-display-block**
    -  You need your element to consume all available horizontal space
    -  You would like to isolate this element from the surrounding elements
    -  You would like to set a height or width to your element
-  **cdr-display-inline**
    -  You want the element default value 
    -  You expect that elements with this class to be nested in a string of text and not break the text flow
-  **cdr-display-inline-block**
    -  You need to set a height and width to your element
    -  You expect that elements with this class to be nested in a string of text and not break the text flow

## Hiding Your Content

Content can be hidden in many ways and these breakpoint-aware classes are named for the css display property they apply.  Before you use any one of the classes provided below, take the following into consideration:

-  **cdr-display-none**
    -  You need the content hidden from all users: visual and screen reader
    -  You expect that the hidden elements space is removed from the page
    -  You expect the parent element to enforce its visibility setting on its children
-  **cdr-display-hidden**
    -  You need the content hidden from visual users
    -  You expect that the hidden elements space is retained on the page
    -  You intend to use css animations to show or hide your elements
    -  You expect the parent elements and their children to have control over their own visibility
-  **cdr-display-sr-only**
    -  You need to add context to a display element for visually-impaired users and search engine bots 
-  **cdr-display-sr-focusable**
    -  You need to hide content until it is tabbed to. This is a helpful way to allow tabbed users to skip repetitive site structure such as navigation and search filters 

</cdr-doc-table-of-contents-shell>