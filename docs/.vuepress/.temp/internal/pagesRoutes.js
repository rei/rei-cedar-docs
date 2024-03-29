import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8daa1a0e","/",{"title":""},["/index.html","/README.md"]],
  ["v-9e7ee766","/getting-started/as-a-designer/",{"title":"As a Designer"},["/getting-started/as-a-designer/index.html","/getting-started/as-a-designer/README.md"]],
  ["v-58127dc8","/getting-started/as-a-developer/",{"title":"As a Developer"},["/getting-started/as-a-developer/index.html","/getting-started/as-a-developer/README.md"]],
  ["v-41d83f4e","/getting-started/as-a-mobile-developer/",{"title":"As a Mobile Developer"},["/getting-started/as-a-mobile-developer/index.html","/getting-started/as-a-mobile-developer/README.md"]],
  ["v-52972155","/getting-started/building-components-with-cedar/",{"title":"Building Reusable Components With Cedar"},["/getting-started/building-components-with-cedar/index.html","/getting-started/building-components-with-cedar/README.md"]],
  ["v-aed267e4","/getting-started/hand-off/",{"title":"Hand-off Process"},["/getting-started/hand-off/index.html","/getting-started/hand-off/README.md"]],
  ["v-b34e0596","/getting-started/using-cedar/",{"title":"Using Cedar"},["/getting-started/using-cedar/index.html","/getting-started/using-cedar/README.md"]],
  ["v-49fdb0a4","/foundation/accessibility/",{"title":"Accessibility"},["/foundation/accessibility/index.html","/foundation/accessibility/README.md"]],
  ["v-89248fa2","/foundation/color/",{"title":"Color"},["/foundation/color/index.html","/foundation/color/README.md"]],
  ["v-78a241b8","/foundation/experience-principles/",{"title":"Experience Principles"},["/foundation/experience-principles/index.html","/foundation/experience-principles/README.md"]],
  ["v-7894c6d4","/foundation/motion/",{"title":"Motion"},["/foundation/motion/index.html","/foundation/motion/README.md"]],
  ["v-3667ea8f","/foundation/spacing/",{"title":"Spacing"},["/foundation/spacing/index.html","/foundation/spacing/README.md"]],
  ["v-2435ffd8","/foundation/responsive/",{"title":"Responsive Layout"},["/foundation/responsive/index.html","/foundation/responsive/README.md"]],
  ["v-c496c086","/foundation/typography/",{"title":"Typography"},["/foundation/typography/index.html","/foundation/typography/README.md"]],
  ["v-9920e98c","/foundation/radius/",{"title":"Radius"},["/foundation/radius/index.html","/foundation/radius/README.md"]],
  ["v-c96d2f88","/foundation/prominence/",{"title":"Prominence"},["/foundation/prominence/index.html","/foundation/prominence/README.md"]],
  ["v-91e549b2","/components/accordion/",{"title":"Accordion"},["/components/accordion/index.html","/components/accordion/README.md"]],
  ["v-9fdf917a","/components/banner/",{"title":"Banner"},["/components/banner/index.html","/components/banner/README.md"]],
  ["v-730dd49a","/components/block-quote/",{"title":"Block Quote"},["/components/block-quote/index.html","/components/block-quote/README.md"]],
  ["v-b7837d68","/components/breadcrumb/",{"title":"Breadcrumb"},["/components/breadcrumb/index.html","/components/breadcrumb/README.md"]],
  ["v-7e89780e","/components/buttons/",{"title":"Buttons"},["/components/buttons/index.html","/components/buttons/README.md"]],
  ["v-84d02b6e","/components/caption/",{"title":"Caption"},["/components/caption/index.html","/components/caption/README.md"]],
  ["v-7683e7df","/components/card/",{"title":"Card"},["/components/card/index.html","/components/card/README.md"]],
  ["v-2316b944","/components/checkboxes/",{"title":"Checkboxes"},["/components/checkboxes/index.html","/components/checkboxes/README.md"]],
  ["v-5a57d6a8","/components/chips/",{"title":"Chip"},["/components/chips/index.html","/components/chips/README.md"]],
  ["v-4aa8d7a8","/components/component-variables/",{"title":"Component Variables"},["/components/component-variables/index.html","/components/component-variables/README.md"]],
  ["v-35cf99db","/components/filmstrip/",{"title":"Filmstrip"},["/components/filmstrip/index.html","/components/filmstrip/README.md"]],
  ["v-157089e4","/components/container/",{"title":"Container"},["/components/container/index.html","/components/container/README.md"]],
  ["v-2a568379","/components/form-group/",{"title":"FormGroup"},["/components/form-group/index.html","/components/form-group/README.md"]],
  ["v-1f173c15","/components/grid-deprecated/",{"title":"Grid"},["/components/grid-deprecated/index.html","/components/grid-deprecated/README.md"]],
  ["v-76d95396","/components/icon/",{"title":"Icons"},["/components/icon/index.html","/components/icon/README.md"]],
  ["v-76c3de69","/components/grid/",{"title":"CSS Grid"},["/components/grid/index.html","/components/grid/README.md"]],
  ["v-64d79974","/components/image/",{"title":"Images"},["/components/image/index.html","/components/image/README.md"]],
  ["v-69c3bed6","/components/links/",{"title":"Links"},["/components/links/index.html","/components/links/README.md"]],
  ["v-64ecb8e5","/components/input/",{"title":"Inputs"},["/components/input/index.html","/components/input/README.md"]],
  ["v-69c6267a","/components/lists/",{"title":"Lists"},["/components/lists/index.html","/components/lists/README.md"]],
  ["v-051d2c95","/components/pagination/",{"title":"Pagination"},["/components/pagination/index.html","/components/pagination/README.md"]],
  ["v-6bc87262","/components/modal/",{"title":"Modal"},["/components/modal/index.html","/components/modal/README.md"]],
  ["v-3685d30a","/components/pull-quote/",{"title":"Pull Quote"},["/components/pull-quote/index.html","/components/pull-quote/README.md"]],
  ["v-2f44852c","/components/popover/",{"title":"Popover"},["/components/popover/index.html","/components/popover/README.md"]],
  ["v-738b82d4","/components/radio/",{"title":"Radio Buttons"},["/components/radio/index.html","/components/radio/README.md"]],
  ["v-02735a1c","/components/rating/",{"title":"Rating"},["/components/rating/index.html","/components/rating/README.md"]],
  ["v-079a3b58","/components/selects/",{"title":"Select"},["/components/selects/index.html","/components/selects/README.md"]],
  ["v-76f45561","/components/table/",{"title":"Table"},["/components/table/index.html","/components/table/README.md"]],
  ["v-77756162","/components/text/",{"title":"Text"},["/components/text/index.html","/components/text/README.md"]],
  ["v-77733d31","/components/tabs/",{"title":"Tabs"},["/components/tabs/index.html","/components/tabs/README.md"]],
  ["v-f3fb1068","/components/tooltip/",{"title":"Tooltip"},["/components/tooltip/index.html","/components/tooltip/README.md"]],
  ["v-676fa1a5","/components/utilities/",{"title":"Utilities"},["/components/utilities/index.html","/components/utilities/README.md"]],
  ["v-1995ebc0","/about/browser-support/",{"title":"Browser Support Matrix"},["/about/browser-support/index.html","/about/browser-support/README.md"]],
  ["v-5ecd96e6","/about/cedar-design-system/",{"title":"Cedar Design System"},["/about/cedar-design-system/index.html","/about/cedar-design-system/README.md"]],
  ["v-690ed446","/about/contributing-to-cedar/",{"title":"Contributing to Cedar"},["/about/contributing-to-cedar/index.html","/about/contributing-to-cedar/README.md"]],
  ["v-1af0c245","/patterns/alerts/",{"title":"Alerts"},["/patterns/alerts/index.html","/patterns/alerts/README.md"]],
  ["v-6e8cf7c0","/patterns/form-validation/",{"title":"Form Validation"},["/patterns/form-validation/index.html","/patterns/form-validation/Readme.md"]],
  ["v-4ac52b2a","/patterns/forms-input-types/",{"title":"Form Input Types"},["/patterns/forms-input-types/index.html","/patterns/forms-input-types/README.md"]],
  ["v-3f2f28be","/patterns/messaging/",{"title":"Messaging"},["/patterns/messaging/index.html","/patterns/messaging/README.md"]],
  ["v-185baae2","/patterns/status-notifications/",{"title":"Status Notifications"},["/patterns/status-notifications/index.html","/patterns/status-notifications/Readme.md"]],
  ["v-77b94628","/components/toast/",{"title":"Toast"},["/components/toast/index.html","/components/toast/README.md"]],
  ["v-8c7a6e82","/patterns/update-and-loading-notifications/",{"title":"Update and Loading Notifications"},["/patterns/update-and-loading-notifications/index.html","/patterns/update-and-loading-notifications/README.md"]],
  ["v-0d9d36b0","/patterns/validation-notifications/",{"title":"Validation Notifications"},["/patterns/validation-notifications/index.html","/patterns/validation-notifications/Readme.md"]],
  ["v-dbc1ad3c","/icons/library/",{"title":"Icon Library"},["/icons/library/index.html","/icons/library/README.md"]],
  ["v-aa11280c","/release-notes/archive/",{"title":"Release Notes Archive"},["/release-notes/archive/index.html","/release-notes/archive/README.md"]],
  ["v-54d8dd08","/icons/overview/",{"title":"Icon Overview"},["/icons/overview/index.html","/icons/overview/README.md"]],
  ["v-f04ac522","/release-notes/deprecated/",{"title":"Deprecated Features"},["/release-notes/deprecated/index.html","/release-notes/deprecated/README.md"]],
  ["v-700abf78","/release-notes/fall-2019/",{"title":"Fall 2019 Release"},["/release-notes/fall-2019/index.html","/release-notes/fall-2019/README.md"]],
  ["v-700aba24","/release-notes/fall-2020/",{"title":"Fall 2020 Release"},["/release-notes/fall-2020/index.html","/release-notes/fall-2020/README.md"]],
  ["v-700ab9e6","/release-notes/fall-2021/",{"title":"Fall 2021 Release"},["/release-notes/fall-2021/index.html","/release-notes/fall-2021/README.md"]],
  ["v-1ced08c0","/release-notes/spring-2020/",{"title":"Spring 2020 Release"},["/release-notes/spring-2020/index.html","/release-notes/spring-2020/README.md"]],
  ["v-30010238","/release-notes/summer-2019/",{"title":"Summer 2019 Release"},["/release-notes/summer-2019/index.html","/release-notes/summer-2019/README.md"]],
  ["v-1ced08df","/release-notes/spring-2021/",{"title":"Spring 2021 Release"},["/release-notes/spring-2021/index.html","/release-notes/spring-2021/README.md"]],
  ["v-300104e2","/release-notes/summer-2020/",{"title":"Summer 2020 Release"},["/release-notes/summer-2020/index.html","/release-notes/summer-2020/README.md"]],
  ["v-30010501","/release-notes/summer-2021/",{"title":"Summer 2021 Release"},["/release-notes/summer-2021/index.html","/release-notes/summer-2021/README.md"]],
  ["v-5637b378","/release-notes/winter-2020/",{"title":"Winter 2020 Release"},["/release-notes/winter-2020/index.html","/release-notes/winter-2020/README.md"]],
  ["v-5637b397","/release-notes/winter-2021/",{"title":"Winter 2021 Release"},["/release-notes/winter-2021/index.html","/release-notes/winter-2021/README.md"]],
  ["v-05c32b6d","/tokens/all-tokens/",{"title":"All Tokens"},["/tokens/all-tokens/index.html","/tokens/all-tokens/README.md"]],
  ["v-8c1b96cc","/tokens/overview/",{"title":"Design Tokens"},["/tokens/overview/index.html","/tokens/overview/README.md"]],
  ["v-3706649a","/404.html",{},["/404"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, meta, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta,
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress,
    }
  ]
)
