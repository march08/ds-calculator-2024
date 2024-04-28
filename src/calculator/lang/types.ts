export type LangSelectOptionConfig = Record<`${string}:${'title' | 'label'}`, string>;

export type LangConfig = {
	driverOptions: LangSelectOptionConfig;
};
