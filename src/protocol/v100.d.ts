import * as $protobuf from "protobufjs";

/** Properties of a Result. */
export interface IResult {

    /** Result ok */
    ok?: boolean;

    /** Result id */
    id?: string;
}

/** Represents a Result. */
export class Result {

    /**
     * Constructs a new Result.
     * @param [properties] Properties to set
     */
    constructor(properties?: IResult);

    /** Result ok. */
    public ok: boolean;

    /** Result id. */
    public id: string;

    /**
     * Creates a new Result instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Result instance
     */
    public static create(properties?: IResult): Result;

    /**
     * Encodes the specified Result message. Does not implicitly {@link Result.verify|verify} messages.
     * @param message Result message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IResult, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Result message, length delimited. Does not implicitly {@link Result.verify|verify} messages.
     * @param message Result message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IResult, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Result message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Result
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Result;

    /**
     * Decodes a Result message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Result
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Result;

    /**
     * Verifies a Result message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Result message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Result
     */
    public static fromObject(object: { [k: string]: any }): Result;

    /**
     * Creates a plain object from a Result message. Also converts values to other types if specified.
     * @param message Result
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Result, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Result to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Command. */
export interface ICommand {

    /** Command id */
    id?: string;

    /** Command putProduct */
    putProduct?: IPutProduct;

    /** Command deleteProduct */
    deleteProduct?: IDeleteProduct;

    /** Command putStock */
    putStock?: IPutStock;

    /** Command putImage */
    putImage?: IPutImage;
}

/** Represents a Command. */
export class Command {

    /**
     * Constructs a new Command.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICommand);

    /** Command id. */
    public id: string;

    /** Command putProduct. */
    public putProduct?: (IPutProduct|null);

    /** Command deleteProduct. */
    public deleteProduct?: (IDeleteProduct|null);

    /** Command putStock. */
    public putStock?: (IPutStock|null);

    /** Command putImage. */
    public putImage?: (IPutImage|null);

    /** Command updateType. */
    public updateType?: string;

    /**
     * Creates a new Command instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Command instance
     */
    public static create(properties?: ICommand): Command;

    /**
     * Encodes the specified Command message. Does not implicitly {@link Command.verify|verify} messages.
     * @param message Command message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICommand, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Command message, length delimited. Does not implicitly {@link Command.verify|verify} messages.
     * @param message Command message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICommand, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Command message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Command
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Command;

    /**
     * Decodes a Command message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Command
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Command;

    /**
     * Verifies a Command message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Command message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Command
     */
    public static fromObject(object: { [k: string]: any }): Command;

    /**
     * Creates a plain object from a Command message. Also converts values to other types if specified.
     * @param message Command
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Command, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Command to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Nop. */
export interface INop {
}

/** Represents a Nop. */
export class Nop {

    /**
     * Constructs a new Nop.
     * @param [properties] Properties to set
     */
    constructor(properties?: INop);

    /**
     * Creates a new Nop instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Nop instance
     */
    public static create(properties?: INop): Nop;

    /**
     * Encodes the specified Nop message. Does not implicitly {@link Nop.verify|verify} messages.
     * @param message Nop message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: INop, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Nop message, length delimited. Does not implicitly {@link Nop.verify|verify} messages.
     * @param message Nop message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: INop, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Nop message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Nop
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Nop;

    /**
     * Decodes a Nop message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Nop
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Nop;

    /**
     * Verifies a Nop message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Nop message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Nop
     */
    public static fromObject(object: { [k: string]: any }): Nop;

    /**
     * Creates a plain object from a Nop message. Also converts values to other types if specified.
     * @param message Nop
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Nop, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Nop to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a PutProduct. */
export interface IPutProduct {

    /** PutProduct productId */
    productId?: string;

    /** PutProduct name */
    name?: string;
}

/** Represents a PutProduct. */
export class PutProduct {

    /**
     * Constructs a new PutProduct.
     * @param [properties] Properties to set
     */
    constructor(properties?: IPutProduct);

    /** PutProduct productId. */
    public productId: string;

    /** PutProduct name. */
    public name: string;

    /**
     * Creates a new PutProduct instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PutProduct instance
     */
    public static create(properties?: IPutProduct): PutProduct;

    /**
     * Encodes the specified PutProduct message. Does not implicitly {@link PutProduct.verify|verify} messages.
     * @param message PutProduct message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IPutProduct, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified PutProduct message, length delimited. Does not implicitly {@link PutProduct.verify|verify} messages.
     * @param message PutProduct message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IPutProduct, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PutProduct message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns PutProduct
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PutProduct;

    /**
     * Decodes a PutProduct message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns PutProduct
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PutProduct;

    /**
     * Verifies a PutProduct message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a PutProduct message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns PutProduct
     */
    public static fromObject(object: { [k: string]: any }): PutProduct;

    /**
     * Creates a plain object from a PutProduct message. Also converts values to other types if specified.
     * @param message PutProduct
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: PutProduct, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this PutProduct to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a DeleteProduct. */
export interface IDeleteProduct {

    /** DeleteProduct productId */
    productId?: string;
}

/** Represents a DeleteProduct. */
export class DeleteProduct {

    /**
     * Constructs a new DeleteProduct.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDeleteProduct);

    /** DeleteProduct productId. */
    public productId: string;

    /**
     * Creates a new DeleteProduct instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DeleteProduct instance
     */
    public static create(properties?: IDeleteProduct): DeleteProduct;

    /**
     * Encodes the specified DeleteProduct message. Does not implicitly {@link DeleteProduct.verify|verify} messages.
     * @param message DeleteProduct message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IDeleteProduct, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified DeleteProduct message, length delimited. Does not implicitly {@link DeleteProduct.verify|verify} messages.
     * @param message DeleteProduct message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IDeleteProduct, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DeleteProduct message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DeleteProduct
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DeleteProduct;

    /**
     * Decodes a DeleteProduct message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns DeleteProduct
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DeleteProduct;

    /**
     * Verifies a DeleteProduct message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a DeleteProduct message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns DeleteProduct
     */
    public static fromObject(object: { [k: string]: any }): DeleteProduct;

    /**
     * Creates a plain object from a DeleteProduct message. Also converts values to other types if specified.
     * @param message DeleteProduct
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: DeleteProduct, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this DeleteProduct to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a PutStock. */
export interface IPutStock {

    /** PutStock productId */
    productId?: string;
}

/** Represents a PutStock. */
export class PutStock {

    /**
     * Constructs a new PutStock.
     * @param [properties] Properties to set
     */
    constructor(properties?: IPutStock);

    /** PutStock productId. */
    public productId: string;

    /**
     * Creates a new PutStock instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PutStock instance
     */
    public static create(properties?: IPutStock): PutStock;

    /**
     * Encodes the specified PutStock message. Does not implicitly {@link PutStock.verify|verify} messages.
     * @param message PutStock message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IPutStock, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified PutStock message, length delimited. Does not implicitly {@link PutStock.verify|verify} messages.
     * @param message PutStock message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IPutStock, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PutStock message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns PutStock
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PutStock;

    /**
     * Decodes a PutStock message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns PutStock
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PutStock;

    /**
     * Verifies a PutStock message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a PutStock message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns PutStock
     */
    public static fromObject(object: { [k: string]: any }): PutStock;

    /**
     * Creates a plain object from a PutStock message. Also converts values to other types if specified.
     * @param message PutStock
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: PutStock, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this PutStock to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a PutImage. */
export interface IPutImage {

    /** PutImage entityId */
    entityId?: string;

    /** PutImage url */
    url?: string;
}

/** Represents a PutImage. */
export class PutImage {

    /**
     * Constructs a new PutImage.
     * @param [properties] Properties to set
     */
    constructor(properties?: IPutImage);

    /** PutImage entityId. */
    public entityId: string;

    /** PutImage url. */
    public url: string;

    /**
     * Creates a new PutImage instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PutImage instance
     */
    public static create(properties?: IPutImage): PutImage;

    /**
     * Encodes the specified PutImage message. Does not implicitly {@link PutImage.verify|verify} messages.
     * @param message PutImage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IPutImage, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified PutImage message, length delimited. Does not implicitly {@link PutImage.verify|verify} messages.
     * @param message PutImage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IPutImage, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PutImage message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns PutImage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PutImage;

    /**
     * Decodes a PutImage message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns PutImage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PutImage;

    /**
     * Verifies a PutImage message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a PutImage message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns PutImage
     */
    public static fromObject(object: { [k: string]: any }): PutImage;

    /**
     * Creates a plain object from a PutImage message. Also converts values to other types if specified.
     * @param message PutImage
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: PutImage, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this PutImage to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}
