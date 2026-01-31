package scraper

import (
	"encoding/xml"
	"strings"
	"unicode/utf8"
)

type RSS struct {
	XMLName xml.Name `xml:"rss"`
	Channel Channel  `xml:"channel"`
}

type Channel struct {
	Title string `xml:"title"`
	Items []Item `xml:"item"`
}

type Item struct {
	GUID        string  `xml:"guid"`
	Title       string  `xml:"title"`
	Description string  `xml:"description"`
	Link        string  `xml:"link"`
	PubDate     string  `xml:"pubDate"`
	Source      *Source `xml:"source"`
	Creator     string  `xml:"creator"`
}

type Source struct {
	Name string `xml:",chardata"`
}

func (c *Channel) UnmarshalXML(d *xml.Decoder, start xml.StartElement) error {
	type Alias Channel
	var tmp Alias

	if err := d.DecodeElement(&tmp, &start); err != nil {
		return err
	}

	filtered := make([]Item, 0, len(tmp.Items))
	for _, item := range tmp.Items {
		desc := strings.TrimSpace(item.Description)
		if utf8.RuneCountInString(desc) > 50 {
			filtered = append(filtered, item)
		}
	}

	c.Title = tmp.Title
	c.Items = filtered
	return nil
}
