import React, { Component } from 'react'

class Code extends Component {
  render() {
    const androidCode = `
      <com.google.android.material.button.MaterialButton
        android:id="@+id/material_button"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="@string/button_label_enabled"/>`;

    const flutterCode = `
      @override
      Widget build(BuildContext context) {
        final ButtonThemeData buttonTheme = ButtonTheme.of(context);
        // We divide by 4.0 because we want half of the average of the left and right padding.
        final double paddingUnit = buttonTheme.padding.horizontal / 4.0;
        final Widget child = Row(
          mainAxisAlignment: alignment,
          mainAxisSize: mainAxisSize,
          children: children.map<Widget>((Widget child) {
            return Padding(
              padding: EdgeInsets.symmetric(horizontal: paddingUnit),
              child: child
            );
          }).toList()
        );
        switch (buttonTheme.layoutBehavior) {
          case ButtonBarLayoutBehavior.padded:
            return Padding(
              padding: EdgeInsets.symmetric(
                vertical: 2.0 * paddingUnit,
                horizontal: paddingUnit
              ),
              child: child,
            );
          case ButtonBarLayoutBehavior.constrained:
            return Container(
              padding: EdgeInsets.symmetric(horizontal: paddingUnit),
              constraints: const BoxConstraints(minHeight: 52.0),
              alignment: Alignment.center,
              child: child,
            );
        }
        assert(false);
        return null;
      }
      Flutter 1.2.1 • 2019-02-26 16:18 • 8661d8aecd • stable`;

    return (
      <div style={{ marginTop: '40px' }}>
        {/* <div className="flex flex--space-between home-category">
          <div className="flex home-category__item">
            <img src="http://placehold.jp/100x100.png" loading="lazy" alt="category" />
            <div className="home-category__item__text">
              <h6 className="ls-2">DEVELOPE</h6>
              <div className="fs-28">ANDROID</div>
            </div>
          </div>
          <div className="flex home-category__item">
            <img src="http://placehold.jp/100x100.png" loading="lazy" alt="category" />
            <div className="home-category__item__text">
              <h6 className="ls-2">DEVELOPE</h6>
              <div className="fs-28">FLUTTER</div>
            </div>
          </div>
        </div>
        <div className="fazz-row" style={{ marginTop: '40px', marginBottom: '36.5px' }}>
          <div className="fazz-col-6">
            <h3 className="fw-500" style={{ marginTop: '0', marginBottom: '20px' }}>Android</h3>
            <p>
              This article covers the basics of Astrology and how they are inter-related. Astrology is defined as ‘the art or practice of determining the supposed.
            </p>
          </div>
          <div className="fazz-col-6">
            <h3 className="fw-500" style={{ marginTop: '0', marginBottom: '20px' }}>Flutter</h3>
            <p>
              This article covers the basics of Astrology and how they are inter-related. Astrology is defined as ‘the art or practice of determining the supposed.
            </p>
          </div>
        </div>
        <hr /> */}
        <h2 className="article__title-menu" style={{ marginTop: '40px', marginBottom: '20px' }}>Filled Button</h2>
        <p>
          Kind of filled button can used in some condition, shape also combine with another button
        </p>
        <h3 style={{ marginTop: '20px', marginBottom: '20px' }}><strong>Filled Button White Panel</strong></h3>
        <img src="/static/images/tab-style-4.png" />
        <div style={{ marginLeft: '40px' }}>
          <div className="fw-500" style={{ marginTop: '20px', marginBottom: '20px' }}>
            <h3>Android<span style={{ color: '#b620e0', float: 'right', cursor: 'pointer' }}>Copy</span></h3>
          </div>
          <div className="fazz-box-gray" style={{ width: '100%', padding: '40px', fontSize: '18px' }}>
            {androidCode.replace(/ /g, "\u00a0").split('\n').map((item, key) => {
              return <div key={key}>{item}</div>
            })}
          </div>
          <div className="fw-500" style={{ marginTop: '20px', marginBottom: '20px' }}>
            <h3>Flutter<span style={{ color: '#b620e0', float: 'right', cursor: 'pointer' }}>Copy</span></h3>
          </div>
          <div className="fazz-box-gray" style={{ width: '100', padding: '40px', fontSize: '18px' }}>
            {flutterCode.replace(/ /g, "\u00a0").split('\n').map((item, key) => {
              return <div key={key}>{item}</div>
            })}
          </div>
        </div>
      </div>
    )
  }
}

export default Code