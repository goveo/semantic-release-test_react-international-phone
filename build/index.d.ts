import * as React$1 from 'react';
import React__default, { CSSProperties } from 'react';

type CountryIso2 = (string & {}) | 'af' | 'al' | 'dz' | 'ad' | 'ao' | 'ag' | 'ar' | 'am' | 'aw' | 'au' | 'at' | 'az' | 'bs' | 'bh' | 'bd' | 'bb' | 'by' | 'be' | 'bz' | 'bj' | 'bt' | 'bo' | 'ba' | 'bw' | 'br' | 'io' | 'bn' | 'bg' | 'bf' | 'bi' | 'kh' | 'cm' | 'ca' | 'cv' | 'bq' | 'cf' | 'td' | 'cl' | 'cn' | 'co' | 'km' | 'cd' | 'cg' | 'cr' | 'ci' | 'hr' | 'cu' | 'cw' | 'cy' | 'cz' | 'dk' | 'dj' | 'dm' | 'do' | 'ec' | 'eg' | 'sv' | 'gq' | 'er' | 'ee' | 'et' | 'fj' | 'fi' | 'fr' | 'gf' | 'pf' | 'ga' | 'gm' | 'ge' | 'de' | 'gh' | 'gr' | 'gd' | 'gp' | 'gu' | 'gt' | 'gn' | 'gw' | 'gy' | 'ht' | 'hn' | 'hk' | 'hu' | 'is' | 'in' | 'id' | 'ir' | 'iq' | 'ie' | 'il' | 'it' | 'jm' | 'jp' | 'jo' | 'kz' | 'ke' | 'ki' | 'xk' | 'kw' | 'kg' | 'la' | 'lv' | 'lb' | 'ls' | 'lr' | 'ly' | 'li' | 'lt' | 'lu' | 'mo' | 'mk' | 'mg' | 'mw' | 'my' | 'mv' | 'ml' | 'mt' | 'mh' | 'mq' | 'mr' | 'mu' | 'mx' | 'fm' | 'md' | 'mc' | 'mn' | 'me' | 'ma' | 'mz' | 'mm' | 'na' | 'nr' | 'np' | 'nl' | 'nc' | 'nz' | 'ni' | 'ne' | 'ng' | 'kp' | 'no' | 'om' | 'pk' | 'pw' | 'ps' | 'pa' | 'pg' | 'py' | 'pe' | 'ph' | 'pl' | 'pt' | 'pr' | 'qa' | 're' | 'ro' | 'ru' | 'rw' | 'kn' | 'lc' | 'vc' | 'ws' | 'sm' | 'st' | 'sa' | 'sn' | 'rs' | 'sc' | 'sl' | 'sg' | 'sk' | 'si' | 'sb' | 'so' | 'za' | 'kr' | 'ss' | 'es' | 'lk' | 'sd' | 'sr' | 'sz' | 'se' | 'ch' | 'sy' | 'tw' | 'tj' | 'tz' | 'th' | 'tl' | 'tg' | 'to' | 'tt' | 'tn' | 'tr' | 'tm' | 'tv' | 'ug' | 'ua' | 'ae' | 'gb' | 'us' | 'uy' | 'uz' | 'vu' | 'va' | 've' | 'vn' | 'ye' | 'zm' | 'zw';
type BaseCountryData = [
    string,
    CountryIso2,
    string
];
type FormatConfig = Record<string, string> & {
    default: string;
};
type CountryDataWithFormat = [
    ...BaseCountryData,
    FormatConfig | string
];
type CountryDataWithOrder = [
    ...CountryDataWithFormat,
    number
];
type CountryDataAreaCodes = [
    ...CountryDataWithOrder,
    string[]
];
type CountryData = BaseCountryData | CountryDataWithFormat | CountryDataWithOrder | CountryDataAreaCodes;
interface ParsedCountry {
    name: CountryData[0];
    iso2: CountryData[1];
    dialCode: CountryData[2];
    format: CountryData[3];
    priority: CountryData[4];
    areaCodes: CountryData[5];
}
interface CountryGuessResult {
    country: ParsedCountry | undefined;
    fullDialCodeMatch: boolean;
}
interface CustomFlagImage {
    src: string;
    iso2: CountryIso2;
}

interface CountrySelectorDropdownStyleProps {
    style?: React__default.CSSProperties;
    className?: string;
    listItemStyle?: React__default.CSSProperties;
    listItemClassName?: string;
    listItemFlagStyle?: React__default.CSSProperties;
    listItemFlagClassName?: string;
    listItemCountryNameStyle?: React__default.CSSProperties;
    listItemCountryNameClassName?: string;
    listItemDialCodeStyle?: React__default.CSSProperties;
    listItemDialCodeClassName?: string;
    preferredListDividerStyle?: React__default.CSSProperties;
    preferredListDividerClassName?: string;
}
interface CountrySelectorDropdownProps extends CountrySelectorDropdownStyleProps {
    show: boolean;
    dialCodePrefix?: string;
    selectedCountry: CountryIso2;
    countries?: CountryData[];
    preferredCountries?: CountryIso2[];
    flags?: CustomFlagImage[];
    onSelect?: (country: ParsedCountry) => void;
    onClose?: () => void;
}
declare const CountrySelectorDropdown: React__default.FC<CountrySelectorDropdownProps>;

interface CountrySelectorStyleProps {
    style?: React__default.CSSProperties;
    className?: string;
    buttonStyle?: React__default.CSSProperties;
    buttonClassName?: string;
    buttonContentWrapperStyle?: React__default.CSSProperties;
    buttonContentWrapperClassName?: string;
    flagStyle?: React__default.CSSProperties;
    flagClassName?: string;
    dropdownArrowStyle?: React__default.CSSProperties;
    dropdownArrowClassName?: string;
    dropdownStyleProps?: CountrySelectorDropdownStyleProps;
}
type RenderButtonWrapperRootProps = {
    onClick: () => void;
} & Pick<React__default.ButtonHTMLAttributes<HTMLButtonElement>, 'onKeyDown' | 'onMouseDown' | 'title' | 'disabled' | 'role' | 'aria-label' | 'aria-haspopup' | 'aria-expanded'>;
interface CountrySelectorProps extends CountrySelectorStyleProps {
    selectedCountry: CountryIso2;
    onSelect?: CountrySelectorDropdownProps['onSelect'];
    disabled?: boolean;
    hideDropdown?: boolean;
    countries?: CountryData[];
    preferredCountries?: CountryIso2[];
    flags?: CountrySelectorDropdownProps['flags'];
    renderButtonWrapper?: (props: {
        children: React__default.ReactNode;
        rootProps: RenderButtonWrapperRootProps;
    }) => React__default.ReactNode;
}
declare const CountrySelector: React__default.FC<CountrySelectorProps>;

interface DialCodePreviewStyleProps {
    style?: React__default.CSSProperties;
    className?: string;
}
interface DialCodePreviewProps extends DialCodePreviewStyleProps {
    dialCode: string;
    prefix: string;
    disabled?: boolean;
}
declare const DialCodePreview: React__default.FC<DialCodePreviewProps>;

interface FlagImageProps extends React__default.ImgHTMLAttributes<HTMLImageElement> {
    /**
     * @description iso2 code of country flag
     * @required
     */
    iso2?: ParsedCountry['iso2'];
    /**
     * @description Size of flag
     * @default undefined
     */
    size?: CSSProperties['width'];
    /**
     * @description Custom src of flag
     * @default undefined
     */
    src?: string;
    /**
     * @description Protocol to use with twemoji cnd
     * @default "https"
     */
    protocol?: 'http' | 'https';
    /**
     * @description Disable lazy loading of flags (loading="lazy" attribute will not be set)
     * @default undefined
     */
    disableLazyLoading?: boolean;
}
declare const FlagImage: React__default.FC<FlagImageProps>;

interface UsePhoneInputConfig {
    /**
     * @description Default country value (iso2).
     * @default "us"
     */
    defaultCountry?: CountryIso2;
    /**
     * @description phone value
     * @default ""
     */
    value?: string;
    /**
     * @description Array of available countries for guessing.
     * @default defaultCountries // full country list
     */
    countries?: CountryData[];
    /**
     * @description Countries to display at the top of the list of dropdown options.
     * @default []
     */
    preferredCountries?: CountryIso2[];
    /**
     * @description Prefix for phone value.
     * @default "+"
     */
    prefix?: string;
    /**
     * @description This mask will apply on countries that does not have specified mask.
     * @default "............" // 12 chars
     */
    defaultMask?: string;
    /**
     * @description Char that renders after country dial code.
     * @default " "
     */
    charAfterDialCode?: string;
    /**
     * @description
     * Save value to history if there were not any changes in provided milliseconds timeslot.
     * Undo/redo (ctrl+z/ctrl+shift+z) works only with values that are saved in history.
     * @default 200
     */
    historySaveDebounceMS?: number;
    /**
     * @description Disable country guess on value change.
     * @default false
     */
    disableCountryGuess?: boolean;
    /**
     * @description
     * Disable dial code prefill on initialization.
     * Dial code prefill works only when "empty" phone value have been provided.
     * @default false
     */
    disableDialCodePrefill?: boolean;
    /**
     * @description
     * Always display the dial code.
     * Dial code can't be removed/changed by keyboard events, but it can be changed by pasting another country phone value.
     * @default false
     */
    forceDialCode?: boolean;
    /**
     * @description Display phone value will not include passed *dialCode* and *prefix* if set to *true*.
     * @ignore *forceDialCode* value will be ignored.
     * @default false
     */
    disableDialCodeAndPrefix?: boolean;
    /**
     * @description Disable phone value mask formatting. All formatting characters will not be displayed, but the mask length will be preserved.
     * @default false
     */
    disableFormatting?: boolean;
    /**
     * @description Callback that calls on phone change
     * @param data - New phone data.
     * @param data.phone - Phone in E164 format.
     * @param data.inputValue - Formatted phone string.
     * @param data.country - Current country object.
     * @default undefined
     */
    onChange?: (data: {
        phone: string;
        inputValue: string;
        country: ParsedCountry;
    }) => void;
    /**
     * @description Ref for the input element.
     * @default undefined
     */
    inputRef?: React.MutableRefObject<HTMLInputElement | null>;
}
declare const usePhoneInput: ({ defaultCountry, value, countries, prefix, defaultMask, charAfterDialCode, historySaveDebounceMS, disableCountryGuess, disableDialCodePrefill, forceDialCode: forceDialCodeConfig, disableDialCodeAndPrefix, disableFormatting, onChange, inputRef: inputRefProp, }: UsePhoneInputConfig) => {
    phone: string;
    inputValue: string;
    country: ParsedCountry;
    setCountry: (countryIso2: CountryIso2, options?: {
        focusOnInput: boolean;
    }) => void;
    handlePhoneValueChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => string;
    inputRef: React$1.MutableRefObject<HTMLInputElement | null>;
};

interface PhoneInputStyleProps {
    style?: React__default.CSSProperties;
    className?: string;
    inputStyle?: React__default.CSSProperties;
    inputClassName?: string;
    countrySelectorStyleProps?: CountrySelectorStyleProps;
    dialCodePreviewStyleProps?: DialCodePreviewStyleProps;
}
type InputProps = React__default.InputHTMLAttributes<HTMLInputElement>;
interface PhoneInputProps extends Omit<UsePhoneInputConfig, 'onChange'>, PhoneInputStyleProps {
    /**
     * @description Hide the dropdown icon. Make country selection not accessible.
     * @default false
     */
    hideDropdown?: CountrySelectorProps['hideDropdown'];
    /**
     * @description
     * Show prefix and dial code between country selector and phone input.
     * Works only when *disableDialCodeAndPrefix* is *true*
     * @default false
     */
    showDisabledDialCodeAndPrefix?: boolean;
    /**
     * @description Disable auto focus on input field after country select.
     * @default false
     */
    disableFocusAfterCountrySelect?: boolean;
    /**
     * @description Custom flag URLs array
     * @default undefined
     */
    flags?: CountrySelectorProps['flags'];
    /**
     * @description Callback that calls on phone change
     * @param phone - New phone value in E.164 format.
     * @param meta - Additional information about the phone.
     * @param data.country - New phone country object.
     * @param data.inputValue - Value that is displayed in input element.
     * @default undefined
     */
    onChange?: (phone: string, meta: {
        country: ParsedCountry;
        inputValue: string;
    }) => void;
    /**
     * @description Default input component props
     * @default undefined
     */
    inputProps?: InputProps;
    onFocus?: InputProps['onFocus'];
    onBlur?: InputProps['onBlur'];
    name?: InputProps['name'];
    required?: InputProps['required'];
    autoFocus?: InputProps['autoFocus'];
    disabled?: InputProps['disabled'];
    placeholder?: InputProps['placeholder'];
}
type PhoneInputRefType = null | (HTMLInputElement & {
    setCountry: ReturnType<typeof usePhoneInput>['setCountry'];
    state: {
        phone: string;
        inputValue: string;
        country: ParsedCountry;
    };
});
declare const PhoneInput: React__default.ForwardRefExoticComponent<PhoneInputProps & React__default.RefAttributes<PhoneInputRefType>>;

declare const defaultCountries: CountryData[];

declare const buildCountryData: (parsedCountry: ParsedCountry) => CountryData;

/**
 * Get the country mask format based on the phone value.
 * Since country can have multiple mask formats this function select proper mask based on regex
 */
declare const getActiveFormattingMask: ({ phone, country, defaultMask, disableFormatting, }: {
    phone: string;
    country: ParsedCountry;
    /**
     * defaultMask is returned when country's format is undefined or not valid
     */
    defaultMask?: string | undefined;
    disableFormatting?: boolean | undefined;
}) => string;

declare const getCountry: ({ field, value, countries, }: {
    /**
     * field to search by
     */
    field: keyof ParsedCountry;
    /**
     * value to search for
     */
    value: CountryData[number];
    countries?: CountryData[] | undefined;
}) => ParsedCountry | undefined;

declare const guessCountryByPartialNumber: ({ phone: partialPhone, countries, currentCountryIso2, }: {
    phone: string;
    countries?: CountryData[] | undefined;
    currentCountryIso2?: CountryIso2 | undefined;
}) => CountryGuessResult;

declare const parseCountry: (countryData: CountryData) => ParsedCountry;

interface AddDialCodeProps {
    phone: string;
    dialCode: string;
    prefix?: string;
    charAfterDialCode?: string;
}
declare const addDialCode: ({ phone, dialCode, prefix, charAfterDialCode, }: AddDialCodeProps) => string;

interface RemoveDialCodeProps {
    phone: string;
    dialCode: string;
    prefix?: string;
    charAfterDialCode?: string;
}
declare const removeDialCode: ({ phone, dialCode, prefix, charAfterDialCode, }: RemoveDialCodeProps) => string;

export { CountryData, CountryIso2, CountrySelector, CountrySelectorDropdown, DialCodePreview, FlagImage, PhoneInput, PhoneInputProps, PhoneInputRefType, addDialCode, buildCountryData, defaultCountries, getActiveFormattingMask, getCountry, guessCountryByPartialNumber as guessCountryByPartialPhoneNumber, parseCountry, removeDialCode, usePhoneInput };
