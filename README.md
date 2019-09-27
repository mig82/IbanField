# IBAN Field

This project showcases an example of how to build a *Reusable Iban Field
Component* using *Kony Visualizer*.

## Use Cases

Add it to screens where the user is expected to type in an [IBAN](https://en.wikipedia.org/wiki/International_Bank_Account_Number) (International Bank Account Number) in order to execute a bank transfer.

![Iban Field](/pics/IbanField1.png "Iban Field 1")

![Iban Field](/pics/IbanField2.png "Iban Field 2")

It supports IBAN validation for any of the following countries:
NO, BE, DK, FI, FO, GL, NL, MK, SI, AT, BA, EE, KZ, LT, LU, CR, CH, HR, LI, LV, BG, BH, DE, GB, GE, IE, ME, RS, AE, GI, IL, AD, CZ, ES, MD, PK, RO, SA, SE, SK, VG, TN, PT, IS, TR, FR, GR, IT, MC, MR, SM, AL, AZ, CY, DO, GT, HU, LB, PL, BR, PS, KW, MU, MT.

## Implementation Details

### IBAN Validation

The IBAN validation algorithm is taken from [Rosetta Code](https://rosettacode.org/wiki/IBAN#JavaScript).

### Visualizer Version
This project was built using Kony Visualizer Quantum 8.4.22.

### Look & Feel Customisations

This component exposes several skin properties for you to customise its look & feel. If you believe any properties are missing, please open an issue [here](https://github.com/mig82/IbanField/issues) and I'll consider exposing it. Forks and pull requests are also very welcome if you'd like to contribute.

For the icons, this component relies on FontAwesome [4.7](https://fontawesome.com/v4.7.0/) and uses its unicodes as label text.

### Naming Conventions

I favour suffixes in lieu of prefixes. All widgets and skins in this component bear names with suffixes indicating what they are —e.g.: `iconLabel`, `showButton`.

Skins bear the suffix of the widget type they apply to, followed by the `Skin` suffix —e.g.: `IbanFieldButtonSkin`.

In order to make it easier for you to manage project skins, all skins in this component bear a `IbanField` prefix —e.g.: `IbanFieldButtonSkin`, `IbanFieldIconLabelSkin`.
