/*

 * ***********************************************************************

 * Keepalive CONFIDENTIAL

 * ___________________

 *

 * Copyright 2022 Keepalive.

 * All Rights Reserved.

 *

 * NOTICE:  All information contained herein is, and remains the property

 * of Keepalive and its suppliers, if any. The intellectual and

 * technical concepts contained herein are proprietary to Keepalive

 * and its suppliers and are protected by trade secret or copyright law.

 * Dissemination of this information or reproduction of this material

 * is strictly forbidden unless prior written permission is obtained

 * from Keepalive.

 * ***********************************************************************

 */


package com.reactcompass.core.models;

import com.adobe.cq.export.json.ComponentExporter;
import com.fasterxml.jackson.annotation.JsonProperty;
import org.osgi.annotation.versioning.ConsumerType;


/**
 * Defines the {@code Customtext} Sling Model used for the {@code reactcompass/components/customtext} component.
 * 
 */
@ConsumerType
public interface Customtext
    extends ComponentExporter
{


    @JsonProperty("text")
    String getText();

    @JsonProperty("fontSize")
    Long getFontSize();

    @JsonProperty("color")
    String getColor();

    @JsonProperty("weight")
    Long getFontWeight();

    @JsonProperty("margin")
    Long getMargin();

    @JsonProperty("family")
    String getFontFamily();
    
    @JsonProperty("textAlign")
    String getTextAlign();

}
