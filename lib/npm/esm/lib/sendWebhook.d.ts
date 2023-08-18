interface Options {
    projectName: string;
    webhookUrl: string;
}
export declare const sendWebhook: (options: Options) => Promise<void>;
export {};
