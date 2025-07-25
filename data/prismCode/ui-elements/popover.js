export let
    defaultPopovers = {
        script: `
    &lt;div class="btn-list">
                    &lt;a tabindex="0" class="btn btn-outline-primary btn-wave" role="button" data-bs-toggle="popover"
                        data-bs-placement="top" title="Popover Top"
                        data-bs-content="And here's some amazing content. It's very engaging. Right?">Popover
                        Top
                    &lt;/a>
                    &lt;a tabindex="0" class="btn btn-outline-primary btn-wave" role="button" data-bs-toggle="popover"
                        data-bs-placement="right" title="Popover Right"
                        data-bs-content="And here's some amazing content. It's very engaging. Right?">Popover
                        Right&lt;/a>
                    &lt;a tabindex="0" class="btn btn-outline-primary btn-wave" role="button" data-bs-toggle="popover"
                        data-bs-placement="bottom" title="Popover Bottom"
                        data-bs-content="And here's some amazing content. It's very engaging. Right?">Popover
                        Bottom&lt;/a>
                    &lt;a tabindex="0" class="btn btn-outline-primary btn-wave" role="button" data-bs-toggle="popover"
                        data-bs-placement="left" title="Popover Left"
                        data-bs-content="And here's some amazing content. It's very engaging. Right?">Popover
                        Left&lt;/a>
                &lt;/div>` },
    coloredHeaders = {
        script: `
    &lt;div class="btn-list">
                    &lt;button type="button" class="btn btn-outline-primary btn-wave" data-bs-toggle="popover"
                        data-bs-placement="top" data-bs-custom-class="header-primary" title="Color Header"
                        data-bs-content="Popover with primary header.">
                        Header Primary
                    &lt;/button>
                    &lt;button type="button" class="btn btn-outline-secondary btn-wave" data-bs-toggle="popover"
                        data-bs-placement="right" data-bs-custom-class="header-secondary" title="Color Header"
                        data-bs-content="Popover with secondary header.">
                        Header Secondary
                    &lt;/button>
                    &lt;button type="button" class="btn btn-outline-info btn-wave" data-bs-toggle="popover"
                        data-bs-placement="bottom" data-bs-custom-class="header-info" title="Color Header"
                        data-bs-content="Popover with info header.">
                        Header Info
                    &lt;/button>
                    &lt;button type="button" class="btn btn-outline-warning btn-wave" data-bs-toggle="popover"
                        data-bs-placement="left" data-bs-custom-class="header-warning" title="Color Header"
                        data-bs-content="Popover with warning header.">
                        Header Warning
                    &lt;/button>
                    &lt;button type="button" class="btn btn-outline-success btn-wave" data-bs-toggle="popover"
                        data-bs-placement="top" data-bs-custom-class="header-success" title="Color Header"
                        data-bs-content="Popover with success header.">
                        Header Success
                    &lt;/button>
                    &lt;button type="button" class="btn btn-outline-danger btn-wave" data-bs-toggle="popover"
                        data-bs-placement="top" data-bs-custom-class="header-danger" title="Color Header"
                        data-bs-content="Popover with danger header.">
                        Header Danger
                    &lt;/button>
                &lt;/div>` },
    coloredPopovers = {
        script: `
    &lt;div class="btn-list">
        &lt;button type="button" class="btn btn-primary btn-wave" data-bs-toggle="popover" data-bs-placement="top"
            data-bs-custom-class="popover-primary" title="Color Background"
            data-bs-content="Popover with primary background.">
            Primary
        &lt;/button>
        &lt;button type="button" class="btn btn-secondary btn-wave" data-bs-toggle="popover"
            data-bs-placement="right" data-bs-custom-class="popover-secondary" title="Color Background"
            data-bs-content="Popover with secondary background.">
            Secondary
        &lt;/button>
        &lt;button type="button" class="btn btn-info btn-wave" data-bs-toggle="popover" data-bs-placement="bottom"
            data-bs-custom-class="popover-info" title="Color Background"
            data-bs-content="Popover with info background.">
            Info
        &lt;/button>
        &lt;button type="button" class="btn btn-warning btn-wave" data-bs-toggle="popover" data-bs-placement="left"
            data-bs-custom-class="popover-warning" title="Color Background"
            data-bs-content="Popover with warning background.">
            Warning
        &lt;/button>
        &lt;button type="button" class="btn btn-success btn-wave" data-bs-toggle="popover" data-bs-placement="top"
            data-bs-custom-class="popover-success" title="Color Background"
            data-bs-content="Popover with success background.">
            Success
        &lt;/button>
        &lt;button type="button" class="btn btn-danger btn-wave" data-bs-toggle="popover" data-bs-placement="right"
            data-bs-custom-class="popover-danger" title="Color Background"
            data-bs-content="Popover with danger background.">
            Danger
        &lt;/button>
        &lt;button type="button" class="btn btn-teal btn-wave" data-bs-toggle="popover" data-bs-placement="bottom"
            data-bs-custom-class="popover-teal" title="Color Background"
            data-bs-content="Popover with teal background.">
            Teal
        &lt;/button>
        &lt;button type="button" class="btn btn-purple btn-wave" data-bs-toggle="popover" data-bs-placement="left"
            data-bs-custom-class="popover-purple" title="Color Background"
            data-bs-content="Popover with purple background.">
            Purple
        &lt;/button>
    &lt;/div>` },
    lightPopovers = {
        script: `
    &lt;div class="btn-list">
        &lt;button type="button" class="btn btn-primary-light btn-wave" data-bs-toggle="popover"
            data-bs-placement="top" data-bs-custom-class="popover-primary-light" title="Light Background"
            data-bs-content="Popover with light primary background.">
            Primary
        &lt;/button>
        &lt;button type="button" class="btn btn-secondary-light btn-wave" data-bs-toggle="popover"
            data-bs-placement="right" data-bs-custom-class="popover-secondary-light" title="Light Background"
            data-bs-content="Popover with light secondary background.">
            Secondary
        &lt;/button>
        &lt;button type="button" class="btn btn-info-light btn-wave" data-bs-toggle="popover"
            data-bs-placement="bottom" data-bs-custom-class="popover-info-light" title="Light Background"
            data-bs-content="Popover with light info background.">
            Info
        &lt;/button>
        &lt;button type="button" class="btn btn-warning-light btn-wave" data-bs-toggle="popover"
            data-bs-placement="left" data-bs-custom-class="popover-warning-light" title="Light Background"
            data-bs-content="Popover with light warning background.">
            Warning
        &lt;/button>
        &lt;button type="button" class="btn btn-success-light btn-wave" data-bs-toggle="popover"
            data-bs-placement="top" data-bs-custom-class="popover-success-light" title="Light Background"
            data-bs-content="Popover with light success background.">
            Success
        &lt;/button>
        &lt;button type="button" class="btn btn-danger-light btn-wave" data-bs-toggle="popover"
            data-bs-placement="right" data-bs-custom-class="popover-danger-light" title="Light Background"
            data-bs-content="Popover with light danger background.">
            Danger
        &lt;/button>
        &lt;button type="button" class="btn btn-teal-light btn-wave" data-bs-toggle="popover"
            data-bs-placement="bottom" data-bs-custom-class="popover-teal-light" title="Light Background"
            data-bs-content="Popover with light teal background.">
            Teal
        &lt;/button>
        &lt;button type="button" class="btn btn-purple-light btn-wave" data-bs-toggle="popover"
            data-bs-placement="left" data-bs-custom-class="popover-purple-light" title="Light Background"
            data-bs-content="Popover with light purple background.">
            Purple
        &lt;/button>
    &lt;/div>` },
    disabledPopover = {
        script: `
    &lt;span class="d-inline-block" tabindex="0" data-bs-toggle="popover" data-bs-trigger="hover"
        data-bs-content="Disabled popover">
        &lt;button class="btn btn-primary" type="button" disabled>Disabled
            button&lt;/button>
    &lt;/span>` },
    iconPopovers = {
        script: `
    &lt;a class="me-4" href="javascript:void(0)" data-bs-toggle="popover" data-bs-placement="top"
        data-bs-custom-class="popover-primary only-body"
        data-bs-content="This popover is used to provide details about this icon.">
        &lt;svg xmlns="http://www.w3.org/2000/svg" class="svg-primary" height="24px" viewBox="0 0 24 24"
            width="24px" fill="#000000">
            &lt;path d="M0 0h24v24H0V0z" fill="none" />
            &lt;path
                d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z" />
        &lt;/svg>
    &lt;/a>
    &lt;a class="me-4" href="javascript:void(0)" data-bs-toggle="popover" data-bs-placement="left"
        data-bs-custom-class="popover-secondary only-body"
        data-bs-content="This popover is used to provide information about this icon.">
        &lt;svg xmlns="http://www.w3.org/2000/svg" class="svg-secondary" height="24px" viewBox="0 0 24 24"
            width="24px" fill="#000000">
            &lt;path d="M0 0h24v24H0V0z" fill="none" />
            &lt;path
                d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
        &lt;/svg>
    &lt;/a>` },
    DismissiblePopovers = {
        script: `&lt;a tabindex="0" class="btn btn-primary m-1" role="button" data-bs-toggle="popover" data-bs-trigger="focus" data-bs-placement="top" 
      data-bs-content="And here's some amazing content. It's very engaging. Right?" data-bs-original-title="Dismissible popover">Popover Dismiss &lt;/a> 
    &lt;a tabindex="0" class="btn btn-secondary m-1" role="button" data-bs-toggle="popover" data-bs-trigger="focus" data-bs-placement="right" 
     data-bs-content="And here's some amazing content. It's very engaging. Right?" data-bs-original-title="Dismissible popover">Popover Dismiss &lt;/a> 
    &lt;a tabindex="0" class="btn btn-info m-1" role="button" data-bs-toggle="popover" data-bs-trigger="focus" data-bs-placement="bottom" 
      data-bs-content="And here's some amazing content. It's very engaging. Right?" data-bs-original-title="Dismissible popover">Popover Dismiss &lt;/a> 
    &lt;a tabindex="0" class="btn btn-warning m-1" role="button" data-bs-toggle="popover" data-bs-trigger="focus" data-bs-placement="left" 
     data-bs-content="And here's some amazing content. It's very engaging. Right?" data-bs-original-title="Dismissible popover">Popover Dismiss &lt;/a> `
    }