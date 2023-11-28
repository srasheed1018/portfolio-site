
import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const myCustomTheme: CustomThemeConfig = {
    name: 'sid-theme',
    properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
		"--theme-font-family-heading": `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
		"--theme-font-color-base": "0 0 0",
		"--theme-font-color-dark": "255 255 255",
		"--theme-rounded-base": "2px",
		"--theme-rounded-container": "12px",
		"--theme-border-base": "4px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "0 0 0",
		"--on-secondary": "255 255 255",
		"--on-tertiary": "0 0 0",
		"--on-success": "0 0 0",
		"--on-warning": "0 0 0",
		"--on-error": "255 255 255",
		"--on-surface": "255 255 255",
		// =~= Theme Colors  =~=
		// primary | #0EA5E9 
		"--color-primary-50": "219 242 252", // #dbf2fc
		"--color-primary-100": "207 237 251", // #cfedfb
		"--color-primary-200": "195 233 250", // #c3e9fa
		"--color-primary-300": "159 219 246", // #9fdbf6
		"--color-primary-400": "86 192 240", // #56c0f0
		"--color-primary-500": "14 165 233", // #0EA5E9
		"--color-primary-600": "13 149 210", // #0d95d2
		"--color-primary-700": "11 124 175", // #0b7caf
		"--color-primary-800": "8 99 140", // #08638c
		"--color-primary-900": "7 81 114", // #075172
		// secondary | #4F46E5 
		"--color-secondary-50": "229 227 251", // #e5e3fb
		"--color-secondary-100": "220 218 250", // #dcdafa
		"--color-secondary-200": "211 209 249", // #d3d1f9
		"--color-secondary-300": "185 181 245", // #b9b5f5
		"--color-secondary-400": "132 126 237", // #847eed
		"--color-secondary-500": "79 70 229", // #4F46E5
		"--color-secondary-600": "71 63 206", // #473fce
		"--color-secondary-700": "59 53 172", // #3b35ac
		"--color-secondary-800": "47 42 137", // #2f2a89
		"--color-secondary-900": "39 34 112", // #272270
		// tertiary | #0FBA81 
		"--color-tertiary-50": "219 245 236", // #dbf5ec
		"--color-tertiary-100": "207 241 230", // #cff1e6
		"--color-tertiary-200": "195 238 224", // #c3eee0
		"--color-tertiary-300": "159 227 205", // #9fe3cd
		"--color-tertiary-400": "87 207 167", // #57cfa7
		"--color-tertiary-500": "15 186 129", // #0FBA81
		"--color-tertiary-600": "14 167 116", // #0ea774
		"--color-tertiary-700": "11 140 97", // #0b8c61
		"--color-tertiary-800": "9 112 77", // #09704d
		"--color-tertiary-900": "7 91 63", // #075b3f
		// success | #84cc16 
		"--color-success-50": "237 247 220", // #edf7dc
		"--color-success-100": "230 245 208", // #e6f5d0
		"--color-success-200": "224 242 197", // #e0f2c5
		"--color-success-300": "206 235 162", // #ceeba2
		"--color-success-400": "169 219 92", // #a9db5c
		"--color-success-500": "132 204 22", // #84cc16
		"--color-success-600": "119 184 20", // #77b814
		"--color-success-700": "99 153 17", // #639911
		"--color-success-800": "79 122 13", // #4f7a0d
		"--color-success-900": "65 100 11", // #41640b
		// warning | #EAB308 
		"--color-warning-50": "252 244 218", // #fcf4da
		"--color-warning-100": "251 240 206", // #fbf0ce
		"--color-warning-200": "250 236 193", // #faecc1
		"--color-warning-300": "247 225 156", // #f7e19c
		"--color-warning-400": "240 202 82", // #f0ca52
		"--color-warning-500": "234 179 8", // #EAB308
		"--color-warning-600": "211 161 7", // #d3a107
		"--color-warning-700": "176 134 6", // #b08606
		"--color-warning-800": "140 107 5", // #8c6b05
		"--color-warning-900": "115 88 4", // #735804
		// error | #9119d2 
		"--color-error-50": "239 221 248", // #efddf8
		"--color-error-100": "233 209 246", // #e9d1f6
		"--color-error-200": "228 198 244", // #e4c6f4
		"--color-error-300": "211 163 237", // #d3a3ed
		"--color-error-400": "178 94 224", // #b25ee0
		"--color-error-500": "145 25 210", // #9119d2
		"--color-error-600": "131 23 189", // #8317bd
		"--color-error-700": "109 19 158", // #6d139e
		"--color-error-800": "87 15 126", // #570f7e
		"--color-error-900": "71 12 103", // #470c67
		// surface | #323944 
		"--color-surface-50": "224 225 227", // #e0e1e3
		"--color-surface-100": "214 215 218", // #d6d7da
		"--color-surface-200": "204 206 208", // #ccced0
		"--color-surface-300": "173 176 180", // #adb0b4
		"--color-surface-400": "112 116 124", // #70747c
		"--color-surface-500": "50 57 68", // #323944
		"--color-surface-600": "45 51 61", // #2d333d
		"--color-surface-700": "38 43 51", // #262b33
		"--color-surface-800": "30 34 41", // #1e2229
		"--color-surface-900": "25 28 33", // #191c21
		
	}
}