# IBAN Field

This project showcases an example of how to build a *Reusable Iban Field
Component* using *Kony Visualizer*.

## Use Cases

Add it to screens where the user is expected to type in an [IBAN](https://en.wikipedia.org/wiki/International_Bank_Account_Number) (International Bank Account Number) in order to execute a bank transfer.

![IBAN Field example 1](/pics/IbanField1.png "IBAN Field 1")

![IBAN Field example 2](/pics/IbanField2.png "IBAN Field 2")

It supports IBAN validation for any of the following countries:
NO, BE, DK, FI, FO, GL, NL, MK, SI, AT, BA, EE, KZ, LT, LU, CR, CH, HR, LI, LV, BG, BH, DE, GB, GE, IE, ME, RS, AE, GI, IL, AD, CZ, ES, MD, PK, RO, SA, SE, SK, VG, TN, PT, IS, TR, FR, GR, IT, MC, MR, SM, AL, AZ, CY, DO, GT, HU, LB, PL, BR, PS, KW, MU, MT.

## IBAN Validation

The IBAN validation algorithm is taken from [Rosetta Code](https://rosettacode.org/wiki/IBAN#JavaScript).

## Visualizer Version
This project was built using Kony Visualizer Quantum 8.4.22.

## Look & Feel Customisations

This component exposes several skin properties for you to customise its look & feel. If you believe any properties are missing, please open an issue [here](https://github.com/mig82/IbanField/issues) and I'll consider exposing it. Forks and pull requests are also very welcome if you'd like to contribute.

For the icons, this component relies on FontAwesome [4.7](https://fontawesome.com/v4.7.0/) and uses its unicodes as label text.

![IBAN Field Config](/pics/IbanField_config.png "Iban Field Config")

## Custom Events

This component exposes two custom events: `onValidIban` and `onInvalidIban`, which are fired after the user is done entering a value. This will allow you to react to whether the value entered is valid or not —e.g. Typically, if the IBAN is invalid, it's possible the user is entering a local account number and therefore you need to display another field for a [SWIFT/BIC](https://en.wikipedia.org/wiki/ISO_9362) or a [Sort Code](https://en.wikipedia.org/wiki/Sort_code), depending on the transfer mechanisms available the country.

![IBAN Field Events](/pics/IbanField_events.png "Iban Field Config")

## Naming Conventions

I favour suffixes in lieu of prefixes. All widgets and skins in this component bear names with suffixes indicating what they are —e.g.: `iconLabel`, `showButton`.

Skins bear the suffix of the widget type they apply to, followed by the `Skin` suffix —e.g.: `IbanFieldButtonSkin`.

In order to make it easier for you to manage project skins, all skins in this component bear a `IbanField` prefix —e.g.: `IbanFieldButtonSkin`, `IbanFieldIconLabelSkin`.

## Preview Code

To preview of this project in Visualizer Quantum, use preview code: **QDN7Z**

![Preview Code](/pics/preview_code.png)
