package com.sunbird.plugins.capacitorplugincustomtabs;

import android.util.Log;

public class CustomTabsPlugin {

    public String echo(String value) {
        Log.i("Echo", value);
        return value;
    }
}
