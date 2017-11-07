import * as $protobuf from "protobufjs";

/** Properties of an OffsetMap. */
export interface IOffsetMap {

    /** OffsetMap offsets */
    offsets?: { [k: string]: number };
}

/** Represents an OffsetMap. */
export class OffsetMap {

    /**
     * Constructs a new OffsetMap.
     * @param [properties] Properties to set
     */
    constructor(properties?: IOffsetMap);

    /** OffsetMap offsets. */
    public offsets: { [k: string]: number };

    /**
     * Creates a new OffsetMap instance using the specified properties.
     * @param [properties] Properties to set
     * @returns OffsetMap instance
     */
    public static create(properties?: IOffsetMap): OffsetMap;

    /**
     * Encodes the specified OffsetMap message. Does not implicitly {@link OffsetMap.verify|verify} messages.
     * @param message OffsetMap message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IOffsetMap, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified OffsetMap message, length delimited. Does not implicitly {@link OffsetMap.verify|verify} messages.
     * @param message OffsetMap message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IOffsetMap, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an OffsetMap message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns OffsetMap
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): OffsetMap;

    /**
     * Decodes an OffsetMap message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns OffsetMap
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): OffsetMap;

    /**
     * Verifies an OffsetMap message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an OffsetMap message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns OffsetMap
     */
    public static fromObject(object: { [k: string]: any }): OffsetMap;

    /**
     * Creates a plain object from an OffsetMap message. Also converts values to other types if specified.
     * @param message OffsetMap
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: OffsetMap, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this OffsetMap to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Payload. */
export interface IPayload {

    /** Payload eventLists */
    eventLists?: IEventList[];
}

/** Represents a Payload. */
export class Payload {

    /**
     * Constructs a new Payload.
     * @param [properties] Properties to set
     */
    constructor(properties?: IPayload);

    /** Payload eventLists. */
    public eventLists: IEventList[];

    /**
     * Creates a new Payload instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Payload instance
     */
    public static create(properties?: IPayload): Payload;

    /**
     * Encodes the specified Payload message. Does not implicitly {@link Payload.verify|verify} messages.
     * @param message Payload message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IPayload, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Payload message, length delimited. Does not implicitly {@link Payload.verify|verify} messages.
     * @param message Payload message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IPayload, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Payload message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Payload
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Payload;

    /**
     * Decodes a Payload message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Payload
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Payload;

    /**
     * Verifies a Payload message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Payload message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Payload
     */
    public static fromObject(object: { [k: string]: any }): Payload;

    /**
     * Creates a plain object from a Payload message. Also converts values to other types if specified.
     * @param message Payload
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Payload, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Payload to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an Event. */
export interface IEvent {

    /** Event version */
    version?: number;

    /** Event addNote */
    addNote?: IAddNote;
}

/** Represents an Event. */
export class Event {

    /**
     * Constructs a new Event.
     * @param [properties] Properties to set
     */
    constructor(properties?: IEvent);

    /** Event version. */
    public version: number;

    /** Event addNote. */
    public addNote?: (IAddNote|null);

    /** Event inner. */
    public inner?: string;

    /**
     * Creates a new Event instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Event instance
     */
    public static create(properties?: IEvent): Event;

    /**
     * Encodes the specified Event message. Does not implicitly {@link Event.verify|verify} messages.
     * @param message Event message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IEvent, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Event message, length delimited. Does not implicitly {@link Event.verify|verify} messages.
     * @param message Event message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IEvent, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an Event message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Event
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Event;

    /**
     * Decodes an Event message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Event
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Event;

    /**
     * Verifies an Event message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an Event message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Event
     */
    public static fromObject(object: { [k: string]: any }): Event;

    /**
     * Creates a plain object from an Event message. Also converts values to other types if specified.
     * @param message Event
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Event, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Event to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an EventList. */
export interface IEventList {

    /** EventList ref */
    ref?: string;

    /** EventList events */
    events?: IEvent[];
}

/** Represents an EventList. */
export class EventList {

    /**
     * Constructs a new EventList.
     * @param [properties] Properties to set
     */
    constructor(properties?: IEventList);

    /** EventList ref. */
    public ref: string;

    /** EventList events. */
    public events: IEvent[];

    /**
     * Creates a new EventList instance using the specified properties.
     * @param [properties] Properties to set
     * @returns EventList instance
     */
    public static create(properties?: IEventList): EventList;

    /**
     * Encodes the specified EventList message. Does not implicitly {@link EventList.verify|verify} messages.
     * @param message EventList message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IEventList, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified EventList message, length delimited. Does not implicitly {@link EventList.verify|verify} messages.
     * @param message EventList message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IEventList, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an EventList message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns EventList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): EventList;

    /**
     * Decodes an EventList message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns EventList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): EventList;

    /**
     * Verifies an EventList message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an EventList message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns EventList
     */
    public static fromObject(object: { [k: string]: any }): EventList;

    /**
     * Creates a plain object from an EventList message. Also converts values to other types if specified.
     * @param message EventList
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: EventList, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this EventList to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a NoteList. */
export interface INoteList {

    /** NoteList notes */
    notes?: string[];
}

/** Represents a NoteList. */
export class NoteList {

    /**
     * Constructs a new NoteList.
     * @param [properties] Properties to set
     */
    constructor(properties?: INoteList);

    /** NoteList notes. */
    public notes: string[];

    /**
     * Creates a new NoteList instance using the specified properties.
     * @param [properties] Properties to set
     * @returns NoteList instance
     */
    public static create(properties?: INoteList): NoteList;

    /**
     * Encodes the specified NoteList message. Does not implicitly {@link NoteList.verify|verify} messages.
     * @param message NoteList message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: INoteList, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified NoteList message, length delimited. Does not implicitly {@link NoteList.verify|verify} messages.
     * @param message NoteList message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: INoteList, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a NoteList message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns NoteList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): NoteList;

    /**
     * Decodes a NoteList message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns NoteList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): NoteList;

    /**
     * Verifies a NoteList message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a NoteList message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns NoteList
     */
    public static fromObject(object: { [k: string]: any }): NoteList;

    /**
     * Creates a plain object from a NoteList message. Also converts values to other types if specified.
     * @param message NoteList
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: NoteList, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this NoteList to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an AddNote. */
export interface IAddNote {

    /** AddNote note */
    note?: string;
}

/** Represents an AddNote. */
export class AddNote {

    /**
     * Constructs a new AddNote.
     * @param [properties] Properties to set
     */
    constructor(properties?: IAddNote);

    /** AddNote note. */
    public note: string;

    /**
     * Creates a new AddNote instance using the specified properties.
     * @param [properties] Properties to set
     * @returns AddNote instance
     */
    public static create(properties?: IAddNote): AddNote;

    /**
     * Encodes the specified AddNote message. Does not implicitly {@link AddNote.verify|verify} messages.
     * @param message AddNote message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IAddNote, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified AddNote message, length delimited. Does not implicitly {@link AddNote.verify|verify} messages.
     * @param message AddNote message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IAddNote, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an AddNote message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns AddNote
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AddNote;

    /**
     * Decodes an AddNote message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns AddNote
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AddNote;

    /**
     * Verifies an AddNote message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an AddNote message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns AddNote
     */
    public static fromObject(object: { [k: string]: any }): AddNote;

    /**
     * Creates a plain object from an AddNote message. Also converts values to other types if specified.
     * @param message AddNote
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: AddNote, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this AddNote to JSON.
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
